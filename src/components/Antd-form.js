// importing antd components------------------------->
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Col, Row, Image, Avatar, Spin, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import { sabhiApiInstance, apiInstance } from '../axios-instance';
import { InfoCircleOutlined } from '@ant-design/icons';
import '../Antdform.css';

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
        console.log(values);
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
        <div class="backs">
            <Avatar
                style={{ marginTop: "18px", marginLeft: "95px" }}
                src={<Image src={images.profileImage ?? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} />}
                size={140}
            />
            <Form
                layout="horizontal"
                form={form}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            // style={{ height: "1900px" }}  
            >

                <Form.Item label="Name" required tooltip="This is a required field" name="fullName">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Father Name" required tooltip="This is a required field" name="fatherName">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Gender" required tooltip="This is a required field" name="gender">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Country of Stay" required tooltip="This is a required field" name="countryOfStay">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Identity Number" required tooltip="This is a required field" name="identityNumber">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Date of Issue" required tooltip="This is a required field" name="issueDate">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Date of Birth" required tooltip="This is a required field" name="birthDate">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Date of Expiry" required tooltip="This is a required field" name="expireDate">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Permanent Address" required tooltip="This is a required field" name="permanentAddress">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Temporary Address" required tooltip="This is a required field" name="temporaryAddress">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>


            </Form>
        </div>
    );

}