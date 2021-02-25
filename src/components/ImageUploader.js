
// importing antd modules for file uploader-------------------->
import { Upload, Row, Col, Divider, Form, Input, Button, Steps, message } from 'antd';
import { FileImageOutlined, InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';



// base64 image reader for frontCNIC--------------------------->
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}



export default function PictureUploader() {
    const { Step } = Steps;
    const { Dragger } = Upload;

    const [fileList, setFileList] = useState([]);

    const steps = [
        {
            title: 'First',
            content: 'First-content',
        },
        {
            title: 'Second',
            content: 'Second-content',
        },
        {
            title: 'Last',
            content: 'Last-content',
        },
    ];

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    function handleUpload(file) {
        return new Promise(async (resolve, reject) => {
            const did = '123123123123';
            const base64Img = await getBase64(file);
            const response = await axios.post("http://localhost:12345/ocr/cnic/front", {
                did: did,
                cnic: base64Img
            });
            if (response) resolve(response.data);
            else reject('something went wrong!');
        });
    }

    const imageUploader = {
        name: 'cnic',
        multiple: false,
        customRequest: async ({ file, onSuccess, }) => {
            const res = await handleUpload(file);
            if (res.status) onSuccess('ok');
        },
        onChange(info) {
            console.log(info, '   <<<<<<<<<<<<<<<<<<');
            const { status } = info.file;
            console.log(status);
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    // using history hook to navigate-------->
    const history = useHistory();
    function handleClick() {
        history.push({
            pathname: "/form_sdr",

        });
    }

    const uploadButton = (
        <div>
            <FileImageOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

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
                <Divider orientation="left"><b>Upload Cnic Front and Back Also provide a profile picture</b></Divider>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>

                <div className="steps-content">

                    <Dragger {...imageUploader}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                            band files
                        </p>
                    </Dragger>
                </div>
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