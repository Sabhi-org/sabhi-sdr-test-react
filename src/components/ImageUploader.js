
// importing antd modules for file uploader-------------------->
import { Upload, Row, Col, Divider, Form, Input, Button, Steps, message, Spin, Anchor } from 'antd';
import { PictureOutlined, IdcardOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { apiInstance, sabhiApiInstance } from '../axios-instance';

export default function PictureUploader() {
    let history = useHistory();
    const { Step } = Steps;
    const { Dragger } = Upload;
    const { Link } = Anchor;

    const [isDisable, setIsDisable] = useState(false);
    const [identityCardFrontUrl, setIdentityCardFrontUrl] = useState('');
    const [identityCardBackUrl, setIdentityCardBackUrl] = useState('');
    const [identity, setIdentity] = useState("");
    const [isLoading, setIsloading] = useState(false);

    const labelStyle = {
        display: "block",
        marginTop: "30px",
        fontSize: "16px",
        fontWeight: "400",
        paddingBottom: "10px",
    };

    const getIdentity = async () => {
        try {
            setIsloading(true);

            const response = await apiInstance.get('did');
            console.log(response);
            if (response) setIdentity(response.data.did);
            console.log(identity);

            localStorage.setItem('DID', response.data.did);
            console.log(localStorage.getItem('DID'));
            setIsloading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {

        getIdentity();

    }, []);


    // function doneBtnHandler() {
    //     history.push({
    //         pathname: '/form_sdr',
    //         state: identity,
    //     });
    // }

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    function handleUploadIdenitytCardFront(file) {
        return new Promise(async (resolve, reject) => {
            try {
                const base64Img = await getBase64(file);
                console.log(base64Img);
                const response = await sabhiApiInstance.post("ocr/cnic/front", {
                    did: identity,
                    cnic: base64Img
                });
                console.log(response);
                if (response) resolve(response.data);
            } catch (error) {
                if (error.response) {
                    message.error(error.response.data.error.message)
                        .then(() => reject(error));
                } else {
                    reject(error);
                }
            }
        });
    }

    function handleUploadIdenitytCardBack(file) {
        return new Promise(async (resolve, reject) => {
            try {
                const base64Img = await getBase64(file);
                const response = await sabhiApiInstance.put("ocr/cnic/back", {
                    did: identity,
                    cnic: base64Img
                });
                if (response) resolve(response.data);
            } catch (error) {
                if (error.response) {
                    message.error(error.response.data.error.message)
                        .then(() => reject(error));
                } else {
                    reject(error);
                }
            }
        });
    }

    function handleProfileImageUpload(file) {
        return new Promise(async (resolve, reject) => {
            try {
                const base64Img = await getBase64(file);
                const response = await sabhiApiInstance.put("ocr/profile", {
                    did: identity,
                    profileImage: base64Img
                });
                if (response) resolve(response.data);
            } catch (error) {
                if (error.response) {
                    message.error(error.response.data.error.message)
                        .then(() => reject(error));
                } else {
                    reject(error);
                }
            }
        });
    }

    const identityCardBackImageUploader = {
        name: 'cnic',
        multiple: false,
        listType: "picture",
        customRequest: async ({ file, onSuccess, onError, onProgress }) => {
            try {
                const res = await handleUploadIdenitytCardBack(file, onProgress);
                if (res.status) {
                    onSuccess('ok');
                    setCurrent(current + 1);
                }
            } catch (error) {
                console.log(error, '   <<<<<<< ');
                onError(error);
            }
        },
        accept: ".png, .jpg, .jpeg, .tiff",
        beforeUpload: (file) => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/tff';
            if (!isJpgOrPng) {
                message.error('You can only upload JPG/PNG/JPEG/TFF file!');
            }
            // const isLt2M = file.size / 1024 / 1024 < 2;
            // if (!isLt2M) {
            //     message.error('Image must smaller than 2MB!');
            // }
            // return isJpgOrPng && isLt2M;
            return isJpgOrPng;
        },
        onChange({ file, fileList }) {
            const { status } = file;
            console.log(status);
            if (status !== 'uploading') {
                console.log(file, fileList);
            }
            if (status === 'done') {
                message.success(`${file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${file.name} file upload failed.`);
            }
        },
    }

    const identityCardFrontImageUploader = {
        name: 'cnic',
        multiple: false,
        listType: "picture",
        customRequest: async ({ file, onSuccess, onError }) => {
            try {

                setIsDisable(true);
                const res = await handleUploadIdenitytCardFront(file);
                setIdentityCardFrontUrl(res.data.cnic);
                if (res.status) {
                    onSuccess('ok');
                    setCurrent(current + 1);
                }
            } catch (error) {
                console.log('i am here in error');
                console.log(error);
                onError(error);
            }
        },
        accept: ".png, .jpg, .jpeg, .tiff",
        beforeUpload: (file) => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/tff';
            if (!isJpgOrPng) {
                message.error('You can only upload JPG/PNG file!');
            }
            // const isLt2M = file.size / 1024 / 1024 < 2;
            // if (!isLt2M) {
            //     message.error('Image must smaller than 2MB!');
            // }
            // return isJpgOrPng && isLt2M;
            return isJpgOrPng;
        },
        onChange({ file, fileList }) {
            // setInterval(() => {
            //     console.log(file, '   <<<<<<<<<<<  ');
            // }, 1000);
            const { status } = file;
            console.log(status);
            if (status !== 'uploading') {
                console.log(file, fileList);
            }
            if (status === 'done') {
                message.success(`${file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${file.name} file upload failed.`);
            }
        },
    };


    const profileImageUploader = {
        name: 'cnic',
        multiple: false,
        listType: "picture",
        customRequest: async ({ file, onSuccess, onError }) => {
            try {
                setIsDisable(true);
                const res = await handleProfileImageUpload(file);
                setIdentityCardFrontUrl(res.data.cnic);
                if (res.status) {
                    onSuccess('ok');
                    history.push({
                        pathname: '/form_sdr',
                    });
                }
            } catch (error) {
                console.log('i am here in error');
                onError(error);
            }
        },
        accept: ".png, .jpg, .jpeg, .tiff",
        beforeUpload: (file) => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/tff';
            if (!isJpgOrPng) {
                message.error('You can only upload JPG/PNG file!');
            }
            // const isLt2M = file.size / 1024 / 1024 < 2;
            // if (!isLt2M) {
            //     message.error('Image must smaller than 2MB!');
            // }
            // return isJpgOrPng && isLt2M;
            return isJpgOrPng;
        },
        onChange({ file, fileList }) {
            const { status } = file;
            console.log(status);
            if (status !== 'uploading') {
                console.log(file, fileList);
            }
            if (status === 'done') {
                message.success(`${file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${file.name} file upload failed.`);
            }
        },
    };

    const steps = [
        {
            title: 'Identity Card Front',
            content: <Dragger {...identityCardFrontImageUploader}>
                <p className="ant-upload-drag-icon">
                    <IdcardOutlined />
                </p>
                <p className="ant-upload-text">Click or drag identity card front side image to this area to upload</p>
                <p className="ant-upload-hint">
                    Make sure the information on the front side of identity card is clear and readable
                </p>
            </Dragger>,
        },
        {
            title: 'Identity Card Back',
            content: <Dragger {...identityCardBackImageUploader}>
                <p className="ant-upload-drag-icon">
                    <IdcardOutlined />
                </p>
                <p className="ant-upload-text">Click or drag identity card back side image to this area to upload</p>
                <p className="ant-upload-hint">
                    Make sure the information on the back side of identity card is clear and readable
                </p>
            </Dragger>,
        },
        {
            title: 'Profile Picture',
            content: <Dragger {...profileImageUploader}>
                <p className="ant-upload-drag-icon">
                    <PictureOutlined />
                </p>
                <p className="ant-upload-text">Click or drag an image of your face as profile picture</p>
                <p className="ant-upload-hint">
                    make sure your face is clear in the image we recommend you use an updated picture
                </p>
            </Dragger>,
        },
    ];

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    // const prev = () => {
    //     setCurrent(current - 1);
    // };
    // using history hook to navigate-------->


    // rendering uploader---------------------------------------------->
    return (
        <>
            <Spin spinning={isLoading}>
                <Form
                    layout="vertical"
                    name="basic"
                >
                    <Row>
                        <Col span={24}>
                            <label htmlFor="identityValue" style={labelStyle}>
                                Identity
                                <Input size="large" disabled value={identity ?? ''} id="identityValue" />
                            </label>
                        </Col>
                    </Row>
                    <Divider orientation="left"></Divider>
                    <Steps current={current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                    <div className="steps-content">{steps[current].content}</div>
                    {/* <div className="steps-action">
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={doneBtnHandler}>
                                Done
                            </Button>
                        )}
                    </div> */}
                </Form>
            </Spin>
        </>
    );
}