// importing antd components------------------------->
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Col, Row, Divider, Image, Avatar, Spin, Space } from 'antd';
import { FileDoneOutlined } from '@ant-design/icons';
import { axios } from 'react';


// creating antdform----------------->
export default function Antdform() {

    const [loading, setloading] = useState('false');


    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const data = [
        {
            _id: "6038e54ea31cb7ad2c13b07b",
            cnic: "https://sabhi.s3.ap-southeast-1.amazonaws.com/123123123123-1614341443639",
            did: "123123123123",
            identityCardFrontData: {
                issuingCountry: "Pakistan",
                documentType: "National Identity Card",
                nameEnglish: "Muhammed Ameer Hamza",
                fatherNameEnglish: "Muhammad Sarfraz Ahmed",
                gender: "Male",
                countryOfStay: "Pakistan",
                identityNumber: "16101-1121202-1",
                dateOfBirth: "07.11.1987",
                dateOfIssue: "06.02.1987",
                dateOfExpiry: "07.11.1987"
            },
            createdAt: "2021-02-26T12:10:54.183Z",
            updatedAt: "2021-02-26T12:11:31.417Z",
            identityCardBackData: {
                presentAddress: "Street No 5 House No 12 near PSO Petrol PUMP Bahria town phase 6 Rawalpindi, Pakistan",
                permenantAddress: "Layyah Town, street no 89 house no 1443 muhallah lal Deen khan Layyah, Punjab ,Pakaistan",
                holder: "Drlkram,Opposite GPO The Mall Road"
            }
        }
    ]

    const { identityCardFrontData, identityCardBackData, did, cnic } = data[0];


    // rendering antd form ---------------------->
    return (
        <div>
            <Space size="large">
                {/* <Spin size="large"> */}
                <Form
                    style={{ marginTop: "18px" }}
                    layout="vertical"
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>
                    <Row>
                        <Col span={4}>
                            <Avatar
                                style={{ marginTop: "18px" }}
                                src={<Image src={cnic} />}
                                size={140}
                            />
                        </Col>
                        <Col span={20}>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={2}>
                                </Col>
                                <Col className="gutter-row" span={11}>
                                    <Form.Item
                                        initialValue={identityCardFrontData.nameEnglish}
                                        label="Name"
                                        name="fullName"
                                        rules={[{ required: true, message: 'Please enter Complete Name' }]}>
                                        <Input size="small" />
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={11}>
                                    <Form.Item
                                        initialValue={identityCardFrontData.fatherNameEnglish}
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
                                        initialValue={identityCardFrontData.gender}
                                        label="Gender"
                                        name="gender"
                                        rules={[{ required: true, message: 'Please enter gender' }]}>
                                        <Input size="small" />
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={11}>
                                    <Form.Item
                                        initialValue={identityCardFrontData.countryOfStay}
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
                                    initialValue={identityCardFrontData.identityNumber}
                                    label="Identity Number"
                                    name="identityNumber"
                                    rules={[{ required: true, message: 'Enter the Identity Number' }]}>
                                    <Input size="small" />
                                </Form.Item>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Form.Item
                                    initialValue={identityCardFrontData.dateOfIssue}
                                    label="Date of Issue"
                                    name="issueDate"
                                    rules={[{ required: true, message: 'Enter Date of Issue' }]}>
                                    <Input size="small" />
                                </Form.Item>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Form.Item
                                    initialValue={identityCardFrontData.dateOfBirth}
                                    label="Date of Birth"
                                    name="birthDate"
                                    rules={[{ required: true, message: 'Enter Date of Birth' }]}>
                                    <Input size="small" />
                                </Form.Item>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Form.Item
                                    initialValue={identityCardFrontData.dateOfExpiry}
                                    label="Date of Expiry"
                                    name="expireDate"
                                    rules={[{ required: true, message: 'Enter expiry Date' }]}>
                                    <Input size="small" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Col span={24}>
                            <Form.Item
                                initialValue={identityCardBackData.permenantAddress}
                                label="Permanent Address"
                                name="permanentAddress"
                                rules={[{ required: true, message: 'Please enter permanent address' }]}>
                                <Input size="small" />
                            </Form.Item>
                            <Form.Item
                                initialValue={identityCardBackData.presentAddress}
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
                {/* </Spin> */}
            </Space>
        </div >
    );

} 