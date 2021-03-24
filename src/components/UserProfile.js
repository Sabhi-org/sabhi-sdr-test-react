import React, { useEffect, useState } from 'react';
import { Form, Input, Col, Row, Image, Avatar, Spin, Space } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';
import { sabhiApiInstance } from "../axios-instance";

export default function UserProfile() {


    let history = useHistory();
    const [form] = Form.useForm();
    const location = useLocation();
    const [isLoading, setIsloading] = useState('false');
    const [userData, setUserData] = useState(null);
    const [images, setImages] = useState({});
    const did = location.state;

    useEffect(() => {
        setIsloading(false);
        getData();

    })

    async function getData() {
        try {
            const response = await sabhiApiInstance.get(`/application/${did}`);
            setUserData(response.data.data[0]);
            console.log(response.data.data[0]);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div>
            <Space size="large">
                <Spin spinning={isLoading}>
                    <Form
                        style={{ marginTop: "18px" }}
                        layout="vertical"
                        form={form}
                        name="basic"
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
                                            <Input size="small" disabled />
                                        </Form.Item>
                                    </Col>
                                    <Col className="gutter-row" span={11}>
                                        <Form.Item
                                            label="Father Name"
                                            name="fatherName"
                                            rules={[{ required: true, message: 'Please enter Father Name' }]}>
                                            <Input size="small" disabled />
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
                                            <Input size="small" disabled />
                                        </Form.Item>
                                    </Col>
                                    <Col className="gutter-row" span={11}>
                                        <Form.Item
                                            label="Country of Stay"
                                            name="countryOfStay"
                                            rules={[{ required: true, message: 'Please enter the country of stay' }]}>
                                            <Input size="small" disabled />
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
                                        <Input size="small" disabled />
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Date of Issue"
                                        name="issueDate"
                                        rules={[{ required: true, message: 'Enter Date of Issue' }]}>
                                        <Input size="small" disabled />
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Date of Birth"
                                        name="birthDate"
                                        rules={[{ required: true, message: 'Enter Date of Birth' }]}>
                                        <Input size="small" disabled />
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Date of Expiry"
                                        name="expireDate"
                                        rules={[{ required: true, message: 'Enter expiry Date' }]}>
                                        <Input size="small" disabled />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Col span={24}>
                                <Form.Item
                                    label="Permanent Address"
                                    name="permanentAddress"
                                    rules={[{ required: true, message: 'Please enter permanent address' }]}>
                                    <Input size="small" disabled />
                                </Form.Item>
                                <Form.Item
                                    label="Temporary Address"
                                    name="temporaryAddress"
                                    rules={[{ required: true, message: 'Please enter temporary address' }]}>
                                    <Input size="small" disabled />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Spin>
            </Space>
        </div >
    );
}