// importing antd components------------------------->
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Col, Row, Image, Avatar, Spin, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import { sabhiApiInstance, apiInstance } from '../axios-instance';
import { InfoCircleOutlined } from '@ant-design/icons';

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
            <Form
                layout="horizontal"
                form={form}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item label="Field A" required tooltip="This is a required field">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                    label="Field B"
                    tooltip="This is a required field"
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Field A" required tooltip="This is a required field">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Field A" required tooltip="This is a required field">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Field A" required tooltip="This is a required field">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>


            </Form>
    );

}