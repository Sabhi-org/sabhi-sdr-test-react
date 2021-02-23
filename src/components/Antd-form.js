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
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Row>
                    <Col span={12}>
                        <Form.Item
                            label="fullName"
                            name="fullName"
                            rules={[{ required: true, message: 'Please enter fullName' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="gender"
                            name="gender"
                            rules={[{ required: true, message: 'Please enter gender' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="identityNumber"
                            name="identityNumber"
                            rules={[{ required: true, message: 'Please enter identityNumber' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="issueDate"
                            name="issueDate"
                            rules={[{ required: true, message: 'Please enter issueDate' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="temporaryAddress"
                            name="temporaryAddress"
                            rules={[{ required: true, message: 'Please enter temporaryAddress' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Divider type="vertical" />
                    <Col span={11}>
                        <Form.Item
                            label="fatherName"
                            name="fatherName"
                            rules={[{ required: true, message: 'Please enter fatherName' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="countryOfStay"
                            name="countryOfStay"
                            rules={[{ required: true, message: 'Please enter countryOfStay' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="birthDate"
                            name="birthDate"
                            rules={[{ required: true, message: 'Please enter birthDate' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="expireDate"
                            name="expireDate"
                            rules={[{ required: true, message: 'Please enter expireDate' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="permanentAddress"
                            name="permanentAddress"
                            rules={[{ required: true, message: 'Please enter permanentAddress' }]}>
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