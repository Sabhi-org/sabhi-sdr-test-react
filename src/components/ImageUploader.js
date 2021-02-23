
// importing antd modules for file uploader-------------------->
import { Upload, Modal, Row, Col, Divider, Form, Input, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useHistory } from "react-router-dom";




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

    // using history hook to navigate-------->
    const history = useHistory();
    function handleClick() {
        history.push({
            pathname: "/form_sdr",

        });
    }

    // preview state hooks for image---------------------------->
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    // preview state hooks for back cnic image------------------->
    const [previewVisibleTwo, setPreviewVisibleTwo] = useState(false);
    const [previewImageTwo, setPreviewImageTwo] = useState('');
    const [previewTitleTwo, setPreviewTitleTwo] = useState('');

    // preview state hooks for back cnic image------------------->
    const [previewVisibleThree, setPreviewVisibleThree] = useState(false);
    const [previewImageThree, setPreviewImageThree] = useState('');
    const [previewTitleThree, setPreviewTitleThree] = useState('');

    // image file hooks--------------------------->
    const [fileList, setFileList] = useState([]);
    const [backCNIC, setbackCNIC] = useState([]);
    const [profilePic, setprofilePic] = useState([]);

    // events for front of cnic image-------------------->
    const handleCancel = () => setPreviewVisible(false);
    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList }) => setFileList(fileList);

    // events for back of cnic image------------------------->
    const handleCancelTwo = () => setPreviewVisibleTwo(false);
    const handlePreviewTwo = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImageTwo(file.url || file.preview);
        setPreviewVisibleTwo(true);
        setPreviewTitleTwo(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChangeTwo = ({ fileList }) => setbackCNIC(fileList);

    // events for back of cnic image------------------------->
    const handleCancelThree = () => setPreviewVisibleThree(false);
    const handlePreviewThree = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImageThree(file.url || file.preview);
        setPreviewVisibleThree(true);
        setPreviewTitleThree(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChangeThree = ({ fileList }) => setprofilePic(fileList);


    // upload button styling for front CNIC---------------------->
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}><b>Upload Front CNIC</b></div>
        </div>
    );

    // upload button styling for front CNIC---------------------->
    const uploadButtonTwo = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}><b>Upload Back CNIC</b></div>
        </div>
    );

    // upload button styling for front CNIC---------------------->
    const uploadButtonThree = (
        <div>

            <PlusOutlined />
            <div style={{ marginTop: 8 }}><b>Upload Profile Pic</b></div>
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
                <Row gutter={16}>
                    <Col className="gutter-row" span={4} offset={6}>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}>
                            {fileList.length >= 1 ? null : uploadButton}
                        </Upload>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={backCNIC}
                            onPreview={handlePreviewTwo}
                            onChange={handleChangeTwo}>
                            {backCNIC.length >= 1 ? null : uploadButtonTwo}
                        </Upload>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={profilePic}
                            onPreview={handlePreviewThree}
                            onChange={handleChangeThree}>
                            {profilePic.length >= 1 ? null : uploadButtonThree}
                        </Upload>
                    </Col>
                </Row>
                <Row>
                    <Col offset={8} span={8} style={{ marginTop: "30px" }}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Submit
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
            <Modal
                visible={previewVisibleTwo}
                title={previewTitleTwo}
                footer={null}
                onCancel={handleCancelTwo}>
                <img alt="example" style={{ width: '100%' }} src={previewImageTwo} />
            </Modal>
            <Modal
                visible={previewVisibleThree}
                title={previewTitleThree}
                footer={null}
                onCancel={handleCancelThree}>
                <img alt="example" style={{ width: '100%' }} src={previewImageThree} />
            </Modal>
        </>
    );
}