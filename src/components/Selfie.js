import React, { Component } from 'react';
import { Webcam } from './webcam';
// import axios from 'axios';
import { sabhiApiInstance } from '../axios-instance';
// for class component only will change later
import { withRouter } from "react-router-dom";
class Selfie extends Component {
    constructor() {
        super();
        this.webcam = null;
        this.state = {
            capturedImage: null,
            captured: false,

            uploading: false
        }
    }

    componentDidMount() {
        // initialize the camera
        this.canvasElement = document.createElement('canvas');
        this.webcam = new Webcam(
            document.getElementById('webcam'),
            this.canvasElement
        );
        this.webcam.setup().catch(() => {
            alert('Error getting access to your camera');
        });
    }

    componentDidUpdate(prevProps) {
        if (!this.props.offline && (prevProps.offline === true)) {
            // if its online,
            this.batchUploads();
        }
    }

    render() {

        const style = {};
        if (this.state.captured) {
            style.display = 'none'
        }
        const imageDisplay = this.state.capturedImage ?
            <img src={this.state.capturedImage} alt="captured" width="350" height="200" />
            :
            <span />;

        const buttons = this.state.captured ?
            <div>
                <button className="deleteButton" onClick={this.discardImage} > Delete Photo </button>
                <button className="captureButton" onClick={this.uploadImage} > Upload Photo </button>
            </div> :
            <button className="captureButton" onClick={this.captureImage} > Take Picture </button>

        const uploading = this.state.uploading ?
            <div><p> Uploading Image, please wait ... </p></div>
            :
            <span />

        return (
            <div>
                <h4> Take Selfie</h4>
                {uploading}
                <video autoPlay playsInline muted id="webcam" width="100%" style={style} />
                <br />

                {
                    this.state.captured && <div className="imageCanvas">
                        {imageDisplay}
                    </div>
                }

                {buttons}
            </div>
        )
    }

    captureImage = async () => {
        const capturedData = this.webcam.takeBase64Photo({ type: 'jpeg', quality: 0.8 });
        console.log(capturedData.base64);
        this.setState({
            captured: true,
            capturedImage: capturedData.base64
        });
    }

    discardImage = () => {
        this.setState({
            captured: false,
            capturedImage: null
        })
    }

    uploadImage = () => {
        if (this.props.offline) {
            console.log("you're using in offline mode sha");
            // create a random string with a prefix
            const prefix = 'cloudy_pwa_';
            // create random string
            const rs = Math.random().toString(36).substr(2, 5);
            localStorage.setItem(`${prefix}${rs}`, this.state.capturedImage);
            alert('Image saved locally, it will be uploaded to your Sabhi media library once internet connection is detected');
            this.discardImage();
            // save image to local storage
        } else {
            this.setState({ 'uploading': true });
            sabhiApiInstance.put(
                `ocr/profile`,
                {
                    profileImage: this.state.capturedImage,
                    did: localStorage.getItem('DID'),
                }
            ).then(
                (data) => this.checkUploadStatus(data)
            )
                .catch((error) => {
                    alert('Sorry, we encountered an error uploading your image');
                    this.setState({ 'uploading': false });
                });
        }
    }

    findLocalItems = (query) => {
        var i, results = [];
        for (i in localStorage) {
            if (localStorage.hasOwnProperty(i)) {
                if (i.match(query) || (!query && typeof i === 'string')) {
                    const value = localStorage.getItem(i);
                    results.push({ key: i, val: value });
                }
            }
        }
        return results;
    }

    checkUploadStatus = (data) => {
        this.setState({ 'uploading': false });
        if (data.status === 200) {
            alert('Image Uploaded to Sabhi Media Library');
            this.props.history.push('/form_sdr');
            this.discardImage();
        } else {
            alert('Sorry, we encountered an error uploading your image');
        }
    }
    batchUploads = () => {
        // this is where all the images saved can be uploaded as batch uploads
        const images = this.findLocalItems(/^cloudy_pwa_/);
        let error = false;
        if (images.length > 0) {
            this.setState({ 'uploading': true });
            console.log(images);
            console.log(images[0].val);
            localStorage.setItem('ImageFront', images[0].val);
            for (let i = 0; i < images.length; i++) {
                
                // upload
                sabhiApiInstance.post(
                    `ocr/cnic/front`,
                    {
                        file: images[i].val,
                        did: localStorage.getItem('DID'),
                    }
                ).then((data) => this.checkUploadStatus(data)).catch((error) => {
                    error = true;
                })
            }
            this.setState({ 'uploading': false });
            if (!error) {
                alert("All saved images have been uploaded to your Sabhi Media Library");
            }
        }
    }
}
export default Selfie;
