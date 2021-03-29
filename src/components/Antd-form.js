// importing antd components------------------------->
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Col, Row, Image, Avatar, Spin, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import { sabhiApiInstance, apiInstance } from '../axios-instance';
import { FileDoneOutlined } from '@ant-design/icons';

// creating antdform----------------->

export default function Antdform() {
    const did = localStorage.getItem('DID');
    let history = useHistory();
    const [form] = Form.useForm();
    const [isLoading, setIsloading] = useState('false');
    const [images, setImages] = useState({});

    const getOcrRecord = async () => {
        try {
            setIsloading(true);
            const response = await sabhiApiInstance.get(`ocr/${did}`);
            const { identityCardFrontData, identityCardBackData, profileImage, identityCardFrontImage, identityCardBackImage } = response.data.data[0];
            setImages({ profileImage: profileImage, identityCardFrontImage: identityCardFrontImage, identityCardBackImage: identityCardBackImage });
            form.setFieldsValue({
                fullName: identityCardFrontData.nameEnglish,
                fatherName: identityCardFrontData.fatherNameEnglish,
                gender: identityCardFrontData.gender,
                countryOfStay: identityCardFrontData.countryOfStay,
                identityNumber: identityCardFrontData.identityNumber,
                issueDate: identityCardFrontData.dateOfIssue,
                birthDate: identityCardFrontData.dateOfBirth,
                expireDate: identityCardFrontData.dateOfExpiry,
                permanentAddress: identityCardBackData.permenantAddress,
                temporaryAddress: identityCardBackData.presentAddress,
            });
            setIsloading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getOcrRecord();
    }, []);


    const createVerifiablePresentation = async (values) => {
        try {
            const response = await apiInstance.post('vp', values);
        } catch (error) {
            console.error(error);
        }
    }

    const onFinish = (values) => {
        setIsloading(true);
        values.profileImage = images.profileImage;
        values.did = did;
        values.identityCardBackImage = images.identityCardBackImage;
        values.identityCardFrontImage = images.identityCardFrontImage;
        createVerifiablePresentation(values);
        setIsloading(false);
        history.push({
            pathname: '/user_profile',
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // rendering antd form ---------------------->
    return (
        <div>
            <Space size="large">
                <Spin spinning={isLoading}>
                    <Form
                        style={{ marginTop: "18px" }}
                        layout="vertical"
                        form={form}
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Row>
                            <Col span={4}>
                                <Avatar
                                    style={{ marginTop: "18px" }}
                                    src={<Image src={images.profileImage ?? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} />}
                                    size={140}
                                />
                            </Col>
                            <Col span={20}>
                                <Row gutter={16}>
                                    <Col className="gutter-row" span={2}>
                                    </Col>
                                    <Col className="gutter-row" span={11}>
                                        <Form.Item
                                            label="Name"
                                            name="fullName"
                                            rules={[{ required: true, message: 'Please enter Complete Name' }]}>
                                            <Input size="small" />
                                        </Form.Item>
                                    </Col>
                                    <Col className="gutter-row" span={11}>
                                        <Form.Item
                                            label="Father Name"
                                            name="fatherName"
                                            rules={[{ required: true, message: 'Please enter Father Name' }]}>
                                            <Input size="small" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16} offset={4}>
                                    <Col className="gutter-row" span={2}>
                                    </Col>
                                    <Col className="gutter-row" span={11}>
                                        <Form.Item
                                            label="Gender"
                                            name="gender"
                                            rules={[{ required: true, message: 'Please enter gender' }]}>
                                            <Input size="small" />
                                        </Form.Item>
                                    </Col>
                                    <Col className="gutter-row" span={11}>
                                        <Form.Item
                                            label="Country of Stay"
                                            name="countryOfStay"
                                            rules={[{ required: true, message: 'Please enter the country of stay' }]}>
                                            <Input size="small" />
                                        </Form.Item>
                                    </Col>
                                    <Col className="gutter-row" span={6}>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Row gutter={22}>
                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Identity Number"
                                        name="identityNumber"
                                        rules={[{ required: true, message: 'Enter the Identity Number' }]}>
                                        <Input size="small" />
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Date of Issue"
                                        name="issueDate"
                                        rules={[{ required: true, message: 'Enter Date of Issue' }]}>
                                        <Input size="small" />
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Date of Birth"
                                        name="birthDate"
                                        rules={[{ required: true, message: 'Enter Date of Birth' }]}>
                                        <Input size="small" />
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Date of Expiry"
                                        name="expireDate"
                                        rules={[{ required: true, message: 'Enter expiry Date' }]}>
                                        <Input size="small" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Col span={24}>
                                <Form.Item
                                    label="Permanent Address"
                                    name="permanentAddress"
                                    rules={[{ required: true, message: 'Please enter permanent address' }]}>
                                    <Input size="small" />
                                </Form.Item>
                                <Form.Item
                                    label="Temporary Address"
                                    name="temporaryAddress"
                                    rules={[{ required: true, message: 'Please enter temporary address' }]}>
                                    <Input size="small" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={4} offset={10}>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" shape="round" size='large' block>
                                        <FileDoneOutlined />
                                    Submit
                            </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Spin>
            </Space>
        </div >
    );

}