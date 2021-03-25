import React, { useEffect, useState } from 'react';
import { Form, Input, Col, Row, Image, Avatar, Spin, Space, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { sabhiApiInstance } from "../axios-instance";

export default function UserProfile() {

    const [form] = Form.useForm();
    const [isLoading, setIsloading] = useState('false');
    const [userData, setUserData] = useState(null);
    const [images, setImages] = useState({});
    const [did, setDID] = useState('');

    useEffect(() => {
        setDID(localStorage.getItem('DID'));
        console.log(localStorage.getItem('DID'));
        getData();
    }, []);

    async function getData() {
        try {
            setIsloading(true);
            const response = await sabhiApiInstance.get(`application/${did}`);
            console.log(response.data.data[0]);
            const { fullName, fatherName, profileImage, countryOfStay, gender, identityNumber, issueDate, birthDate, expireDate, permanentAddress, temporaryAddress } = response.data.data[0];
            setImages({ profileImage: profileImage, });
            form.setFieldsValue({
                fullName: fullName.value,
                fatherName: fatherName.value,
                gender: gender.value,
                countryOfStay: countryOfStay.value,
                identityNumber: identityNumber.value,
                issueDate: issueDate.value,
                birthDate: birthDate.value,
                expireDate: expireDate.value,
                permanentAddress: permanentAddress.value,
                temporaryAddress: temporaryAddress.value,
            });
            setIsloading(false);
        } catch (error) {
            message.error('something went wrong!', error);
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
                                            name="fullName">
                                            <Input size="small" disabled />
                                        </Form.Item>
                                    </Col>
                                    <Col className="gutter-row" span={11}>
                                        <Form.Item
                                            label="Father Name"
                                            name="fatherName">
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
                                            name="gender">
                                            <Input size="small" disabled />
                                        </Form.Item>
                                    </Col>
                                    <Col className="gutter-row" span={11}>
                                        <Form.Item
                                            label="Country of Stay"
                                            name="countryOfStay">
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
                                        name="identityNumber">
                                        <Input size="small" disabled />
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Date of Issue"
                                        name="issueDate">
                                        <Input size="small" disabled />
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Date of Birth"
                                        name="birthDate">
                                        <Input size="small" disabled />
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Date of Expiry"
                                        name="expireDate">
                                        <Input size="small" disabled />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Col span={24}>
                                <Form.Item
                                    label="Permanent Address"
                                    name="permanentAddress">
                                    <Input size="small" disabled />
                                </Form.Item>
                                <Form.Item
                                    label="Temporary Address"
                                    name="temporaryAddress">
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