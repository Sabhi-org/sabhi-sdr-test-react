import React, { useState } from 'react';
import { Col, message, Row, Spin } from 'antd';
import '../styles/Take_a_selfie_screen15.css';
import { useHistory } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { sabhiApiInstance } from '../axios-instance';
import imageCompression from 'browser-image-compression';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "auto",
        textAlign: 'center',
    },
    imgBox: {
        maxWidth: "100%",
        maxHeight: "auto",
        margin: "0px"
    },
    img: {
        width: "100%",
        height: "auto",
    },
    input: {
        display: "none"
    }

}));

export default function Takefrontpicture() {

    const [isDisabled, setDisable] = useState(false);
    const [base64, setBase64] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [source, setSource] = useState('');

    let history = useHistory();

    async function gotonextscreen() {
        try {
            setLoading(true);
            console.log(localStorage.getItem('DID'));
            console.log(base64);
            const response = await sabhiApiInstance.post('ocr/cnic/front', {
                did: localStorage.getItem('DID'),
                cnicBase64: base64,
            });
            console.log(response.data);
            if (response.data.status) {
                setLoading(false);
                history.push('/takeselfie');
            } else {
                setLoading(false);
                message.warning('something went wrong, please try again!');
            }
        } catch (error) {
            setLoading(false);
            message.error('something went wrong,  please try again!');
        }
    }

    function goBack() {
        history.push('/idready');
    }


    const classes = useStyles();

    const handleCapture = async (target) => {
        try {
            if (target.files) {
                if (target.files.length !== 0) {
                    const file = target.files[0];
                    // const newUrl = URL.createObjectURL(file);


                    // compress image
                    const options = {
                        maxSizeMB: 1,
                        maxWidthOrHeight: 1920,
                        useWebWorker: true,
                    };

                    const compressedFile = await imageCompression(file, options);
                    console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
                    const newUrl = URL.createObjectURL(compressedFile);

                    setSource(newUrl);
                    getBase64(compressedFile, result => {
                        console.log(result);
                        setBase64(result);
                    });
                }
            }
        } catch (error) {
            message.error(error.message);
        }
    };

    const getBase64 = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }



    return (
        <Spin spinning={isLoading} tip="Image processing in progress...">
            <div className="frontpicback">
                {/* <div className="frontpicabove">
                <Row>
                    <Col span={2} offset={2}>
                        <LeftOutlined style={{ color: "#F5F9FF" }} />
                    </Col>
                    <Col span={15}>
                        <small className="samlltextback" onClick={goBack}>Back</small>
                    </Col>
                    <Col span={2}>
                        <QuestionCircleOutlined style={{ color: "#F5F9FF", fontWeight: "500px", fontSize: "22px" }} />
                    </Col>
                    <Col span={2}>
                        <MoreOutlined style={{ color: "#F5F9FF", fontWeight: "500px", fontSize: "22px" }} />
                    </Col>
                </Row>
            </div> */}
                {/* <br></br> */}
                {/* <br></br> */}
                {/* <br></br>
            <br></br>
            <br></br> */}
                <Row>
                    <div className="continerforcamera">
                        <div className={classes.root}>
                            {source &&
                                <Box display="flex" justifyContent="center" className={classes.imgBox}>
                                    <img src={source} alt={"snap"} className={classes.img}></img>
                                </Box>}
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="icon-button-file"
                                type="file"
                                capture="environment"
                                onChange={(e) => handleCapture(e.target)}
                            />

                        </div>
                    </div>
                </Row>
                <br></br>
                {/* <br></br>
            <br></br> */}
                <Row>
                    <Row span={24}>
                        <Col span={24} offset={2}>
                            <div className="textundercamone"> Please take front picture of ID</div>
                            {/* <div className="textundercamtwo">ID card.Make sure it is not blurry or</div>
                        <div className="textundercamthree">dark and is inside the marker.</div> */}
                        </Col>
                    </Row>
                </Row>


                <Row span={24}>
                    <div className="footbuttoncamera">
                        <Row span={24}>

                            <Col span={10} offset={1}>
                                <label className="buttoninthecamerafront" htmlFor="icon-button-file">
                                    <IconButton className="buttoninthecamerafronttwo" onClick={() => setDisable(true)} aria-label="upload picture" component="span">
                                        <p className="buttononforscanningfrontinscan">Scan ID</p>
                                    </IconButton>
                                </label>
                                {/* <div className="buttoninthecamerafronttwo" onClick={() => setDisable(true)} type="primary" shape="round" size='large'>
                                        <p className="buttononforscanningfront">Scan ID</p>
                                    </div> */}

                                {/* <div className="buttoninthecamerafront" type="primary" shape="round" size='large'>
                                <p className="buttononforscanningfront">Scan Front</p>
                            </div> */}
                            </Col>

                            {
                                isDisabled &&
                                <Col span={10} offset={1}>
                                    <div className="buttoninthecamerafronttwo" onClick={gotonextscreen} type="primary" shape="round" size='large'>
                                        <p className="buttononforscanningfront">Continue</p>
                                    </div>
                                </Col>
                            }
                        </Row>
                    </div>
                </Row>
            </div>
        </Spin>
    );
}