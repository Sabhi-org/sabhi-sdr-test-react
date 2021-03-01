// importing antd components------------------------->
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Col, Row, Image, Avatar, Spin, Space } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';
import { sabhiApiInstance } from '../axios-instance';


// creating antdform----------------->
export default function Antdform() {
    let history = useHistory();
    const location = useLocation();
    const [isloading, setisloading] = useState('false');
    const [userDetail, setUserDetail] = useState({});
    const [identityCardFrontData, setIdentityCardFrontData] = useState({});
    const [identityCardBackData, setIdentityCardBackData] = useState({});

    const did = location.state;

    const getOcrRecord = async () => {
        try {
            const response = await sabhiApiInstance.get(`ocr/${did}`);
            console.log(response.data.data);
            setUserDetail(response.data.data[0]);
            setIdentityCardFrontData(response.data.data[0].identityCardFrontData);
            setIdentityCardBackData(response.data.data[0].identityCardBackData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getOcrRecord();
    }, []);

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // rendering antd form ---------------------->
    return (
        <div>
            {
                console.log(identityCardFrontData)
            }
            <Space size="large">
                {/* <Spin size="large"> */}
                <Form
                    style={{ marginTop: "18px" }}
                    layout="vertical"
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>
                    <Row>
                        <Col span={4}>
                            <Avatar
                                style={{ marginTop: "18px" }}
                                src={<Image src={userDetail.profileImage ?? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} />}
                                size={140}
                            />
                        </Col>
                        <Col span={20}>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={2}>
                                </Col>
                                <Col className="gutter-row" span={11}>
                                    <Form.Item
                                        initialValue={identityCardFrontData.nameEnglish ?? 'name not detected by ocr'}
                                        label="Name"
                                        name="fullName"
                                        rules={[{ required: true, message: 'Please enter Complete Name' }]}>
                                        <Input size="small" />
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={11}>
                                    <Form.Item
                                        initialValue={identityCardFrontData.fatherNameEnglish ?? 'father name not detected by ocr'}
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
                                initialValue={identityCardBackData.presentAddress}
                                label="Permanent Address"
                                name="permanentAddress"
                                rules={[{ required: true, message: 'Please enter permanent address' }]}>
                                <Input size="small" />
                            </Form.Item>
                            <Form.Item
                                initialValue={identityCardBackData.permenantAddress}
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