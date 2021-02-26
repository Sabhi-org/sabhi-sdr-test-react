
// importing antd modules for file uploader-------------------->
import { Upload, Row, Col, Divider, Form, Input, Button, Steps, message, Progress, Anchor } from 'antd';
import { PictureOutlined, IdcardOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';


export default function PictureUploader() {
    const { Step } = Steps;
    const { Dragger } = Upload;
    const { Link } = Anchor;

    const [isDisable, setIsDisable] = useState(false);
    const [identityCardFrontUrl, setIdentityCardFrontUrl] = useState('');
    const [identityCardBackUrl, setIdentityCardBackUrl] = useState('');

    useEffect(() => {
        console.log(isDisable);
    }, [isDisable]);

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    function handleUploadIdenitytCardFront(file, onProgress) {
        return new Promise(async (resolve, reject) => {
            try {
                const did = '123123123123';
                const base64Img = await getBase64(file);
                const response = await axios.post("http://localhost:12345/ocr/cnic/front", {
                    did: did,
                    cnic: base64Img
                });
                if (response) resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    function handleUploadIdenitytCardBack(file) {
        return new Promise(async (resolve, reject) => {
            try {
                const did = '123123123123';
                const base64Img = await getBase64(file);
                const response = await axios.put("http://localhost:12345/ocr/cnic/back", {
                    did: did,
                    cnic: base64Img
                });
                if (response) resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    function handleProfileImageUpload(file) {
        return new Promise(async (resolve, reject) => {
            try {
                const did = '123123123123';
                const base64Img = await getBase64(file);
                const response = await axios.put("http://localhost:12345/ocr/profile", {
                    did: did,
                    profileImage: base64Img
                });
                if (response) resolve(response.data);
            } catch (error) {
                reject(error);
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
                if (res.status) onSuccess('ok');
            } catch (error) {
                console.log('i am here in error');
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
            if (fileList.length > 1) message.warn(`you can not upload more than oe file`);
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
                if (res.status) onSuccess('ok');
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
            console.log(file, '   <<<<<<<<<<<  ');
            if (fileList.length > 1) {
                message.warn(`you can not upload more than oe file`);
                return;
            }
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
                if (res.status) onSuccess('ok');
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
            console.log(file, '   <<<<<<<<<<<  ');
            if (fileList.length > 1) {
                message.warn(`you can not upload more than oe file`);
                return;
            }
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
            title: 'In Progress',
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
    const history = useHistory();
    function handleClick() {
        history.push({
            pathname: "/form_sdr",

        });
    }

    // rendering uploader---------------------------------------------->
    return (
        <>
            <Form
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}>
                <Row>
                    <Col span={24}>
                        <Form.Item
                            style={{ marginTop: "30px" }}
                            label="Decentralized Identifier"
                            name="DiD"
                            rules={[{ required: true, message: 'cannot submit without did' }]}>
                            <Input size="large" disabled />
                        </Form.Item>
                    </Col>
                </Row>
                <Divider orientation="left"></Divider>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {/* {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )} */}
                </div>
            </Form>
        </>
    );
}