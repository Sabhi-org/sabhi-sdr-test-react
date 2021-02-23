// importing antd components------------------------->
import React from 'react';
import { Form, Input, Button, Col, Row, Divider } from 'antd';





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
                    <Col span={12}>
                        <Form.Item

                            label="Name"
                            name="fullName"
                            rules={[{ required: true, message: 'Please enter Complete Name' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item

                            label="Gender"
                            name="gender"
                            rules={[{ required: true, message: 'Please enter gender' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Identity Number"
                            name="identityNumber"
                            rules={[{ required: true, message: 'Please enter the Identity Number' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Date of Issue"
                            name="issueDate"
                            rules={[{ required: true, message: 'Please enter date of issuance' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Divider type="vertical" />
                    <Col span={11}>
                        <Form.Item
                            label="Father Name"
                            name="fatherName"
                            rules={[{ required: true, message: 'Please enter Father Name' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Country of Stay"
                            name="countryOfStay"
                            rules={[{ required: true, message: 'Please enter the country of stay' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Date of Birth"
                            name="birthDate"
                            rules={[{ required: true, message: 'Please enter Date of Birth' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Date of Expiry"
                            name="expireDate"
                            rules={[{ required: true, message: 'Please enter Date of expiry' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label="Permanent Address"
                            name="permanentAddress"
                            rules={[{ required: true, message: 'Please enter permanent address' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Temporary Address"
                            name="temporaryAddress"
                            rules={[{ required: true, message: 'Please enter temporary address' }]}>
                            <Input />
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
        </div>
    );

} 