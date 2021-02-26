// importing antd components------------------------->
import React from 'react';
import { Form, Input, Button, Col, Row, Divider, Image, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


// creating antdform----------------->
export default function Antdform() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };




    // rendering antd form ---------------------->
    return (
        <div>
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
                            src={<Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />}
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
                    <Col span={24}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Submit
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div >
    );

} 