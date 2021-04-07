import React from 'react';
import ImageUploader from 'react-images-upload';

class Foo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles, pictureDataURLs) {
        console.log(pictureFiles);
        console.log(pictureDataURLs);
        this.setState({
            pictures: pictureFiles
        });
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.png', 'jpeg']}
                maxFileSize={5242880}
                singleImage={true}
                withPreview={true}
            />
        );
    }
}

export default Foo;