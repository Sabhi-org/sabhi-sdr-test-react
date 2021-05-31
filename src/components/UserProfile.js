import React, { useEffect, useState } from 'react';
import { Form, Input, Col, Row, Image, Avatar, Spin, Space, message, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { sabhiApiInstance } from "../axios-instance";
import { io } from "socket.io-client";
import Swal from 'sweetalert2';
import '../styles/Userprofile.css';

export default function UserProfile() {
    const btnStyle = { background: '#4DDFBC', bordeRadius: '16px', 'borderColor': '#4DDFBC' };
    const did = localStorage.getItem('DID');
    console.log(localStorage.getItem('DID'));
    const [omniData, setOmniData] = useState("");
    const [form] = Form.useForm();
    const [isLoading, setIsloading] = useState('false');
    const [userData, setUserData] = useState(null);
    const [images, setImages] = useState({});

    useEffect(() => {
        getData();
    }, []);


    let test = ""
    let socket;
    // socket
    useEffect(() => {

        const ENDPOINT = 'https://0edb380a1d02.ngrok.io/';
        socket = io(ENDPOINT);
        console.log(socket);
        socket.on('chat', data => {
            console.log(data);
        });

        socket.on('displayOmniCheck', data => {
            console.log(data);
            test = data.message;
            setOmniData(data.message);
            handleswirlTwo();
        });

    }, []);

    async function getData() {
        try {
            setIsloading(true);
            const response = await sabhiApiInstance.get(`ocr/${did}`);
            console.log(response.data.data[0]);
            const { fullName, fatherName, profileImage, countryOfStay, gender, identityNumber, issueDate, birthDate, expireDate, permanentAddress, temporaryAddress } = response.data.data[0].userVerified;
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
            });
            setIsloading(false);
        } catch (error) {
            message.error('something went wrong!', error);
        }
    }

    function handleswirlTwo() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Please confirm following',
            html: `${test}`,
            allowOutsideClick: false,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, it is me',
            cancelButtonText: 'No,it is not me',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('i am confirmed !!! ');
                socket.emit('omniResponse', { status: true, message: "omni is accepted!" });
                swalWithBootstrapButtons.fire(
                    'Confirmed!',
                    'Your data has been confirmed',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                console.log('i am rejected !!!');
                socket.emit('omniResponse', { status: false, message: "omni is rejected!" });
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your data could not be confirmed :(',
                    'error'
                )
            }
        });
    }



    return (
        <div className="formsowncontainer">
            {/* <Space size="large"> */}

            <Form
                style={{ marginTop: "18px", paddingLeft: "25px", paddingRight: "33px" }}
                layout="horizontal"
                form={form}
                name="basic"
            >
                <Spin spinning={isLoading}>
                    <Avatar
                        style={{ marginTop: "10px", marginLeft: "85px" }}
                        src={<Image src={images.profileImage ?? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} />}
                        size={160}
                    />
                    <Form.Item
                        label="Name"
                        name="fullName">
                        <Input size="small" disabled />
                    </Form.Item>
                    <Form.Item
                        label="Father Name"
                        name="fatherName">
                        <Input size="small" disabled />
                    </Form.Item>
                    <Form.Item
                        label="Gender"
                        name="gender">
                        <Input size="small" disabled />
                    </Form.Item>
                    <Form.Item
                        label="Country of Stay"
                        name="countryOfStay">
                        <Input size="small" disabled />
                    </Form.Item>
                    <Form.Item
                        label="Identity Number"
                        name="identityNumber">
                        <Input size="small" disabled />
                    </Form.Item>
                    <Form.Item
                        label="Date of Issue"
                        name="issueDate">
                        <Input size="small" disabled />
                    </Form.Item>
                    <Form.Item
                        label="Date of Birth"
                        name="birthDate">
                        <Input size="small" disabled />
                    </Form.Item>
                    <Form.Item
                        label="Date of Expiry"
                        name="expireDate">
                        <Input size="small" disabled />
                    </Form.Item>
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
                    <Form.Item style={{ paddingLeft: "85px" }}>
                        <Button type="primary" shape="round" style={btnStyle} size='large'>
                            Submit Form
                        </Button>
                    </Form.Item>

                </Spin>
            </Form>
            <Row>
                Verified By: XYZ
            </Row>
        </div >
    );
}