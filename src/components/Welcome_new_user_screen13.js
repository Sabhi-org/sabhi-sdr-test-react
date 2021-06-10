import React, { useEffect, useState } from 'react';
import { Col, Row, Typography, Modal, Button, message, } from 'antd';
import { ShrinkOutlined, QrcodeOutlined, CodepenOutlined, SearchOutlined, RightOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import '../styles/Welcome_new_user_screen12.css';
import { io } from "socket.io-client";

function WelcomeNewUser() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [omniData, setOmniData] = useState("");
    const btnStyle = { background: '#4DDFBC', bordeRadius: '16px', 'borderColor': '#4DDFBC' };
    const btnStyletwo = { background: '#FFFFFF', bordeRadius: '16px', 'borderColor': '#FFFFFF' };

    const { Text } = Typography;






    let socket;
    useEffect(() => {
        const ENDPOINT = 'https://sabhiapi.ngrok.io/';
        socket = io(ENDPOINT);
        console.log(socket);
        socket.on('chat', data => {
            console.log(data);
        });

        socket.on('displayOmniCheck', data => {
            console.log(data);
            setOmniData(data.message);
            showModal();
        });

        socket.on('ppp', data => {
            if (data.status) message.success(data.message);
            else message.error(data.message);
        })

    }, []);


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        let s;
        const ENDPOINT = 'https://sabhiapi.ngrok.io/';
        s = io(ENDPOINT);
        s.emit('omniResponse', { status: true, message: "omni is accepted!" });
        message.success('verified', 1.5);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        let s;
        const ENDPOINT = 'https://sabhiapi.ngrok.io/';
        s = io(ENDPOINT);
        s.emit('omniResponse', { status: false, message: "omni is rejected!" });
        message.error('rejected!', 1.5);
        setIsModalVisible(false);
    };


    return (


        <div className="cover">
            <div className="background">



                {/* <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button> */}
                <Modal title="Omni Check" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Yes" cancelText="No">
                    <p>{omniData}</p>
                </Modal>



                <Row span={24}>
                    <Col span={22}>
                        <div className="fontonewelcome">Welcome,</div>
                        <div className="fonttwonewuser">New User!</div>
                    </Col>
                    <Col>
                        <div className="block2"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span={22}>
                        <div className="fontthreeprof">Profile</div>
                    </Col>
                    <Col>
                        <SearchOutlined style={{ fontSize: '20px', color: '#35568D', marginLeft: '6px', marginTop: '30px' }} />
                    </Col>
                </Row>
                <br></br>
                <Row span={20}>
                    <Col span={8}>
                        <div className="buttonone" type="primary" shape="round" size='large'>
                            <p className="buttononefont">Personal</p>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="buttontwo" type="primary" shape="round" size='large'>
                            <p className="buttontwofont">+ Add New Buisness</p>
                        </div>
                    </Col>
                </Row>
                <div className="fontfour">Personal Information</div>
                <Col span={24}>
                    <Row>
                        <div className="buttonthree" type="primary" shape="round" size='large'>
                            <Col span={24}>
                                <Row>
                                    <Col span={4}>
                                        <div className="block"></div>
                                    </Col>
                                    <Col span={16}>
                                        <p className="buttonthreefont">Scan ID Card</p>
                                        <p className="pending">Pending</p>
                                    </Col>
                                    <Col>
                                        <RightOutlined style={{ fontSize: '14px', color: '#95A7C6', marginLeft: '0px', marginTop: '30px' }} />
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </Row>
                    <Row>
                        <div className="buttonfour" type="primary" shape="round" size='large'>
                            <Col span={24}>
                                <Row>
                                    <Col span={4}>
                                        <div className="block"></div>
                                    </Col>
                                    <Col span={16}>
                                        <p className="buttonfourfont">Record Selfie</p>
                                        <p className="pending">Pending</p>
                                    </Col>
                                    <Col>
                                        <RightOutlined style={{ fontSize: '14px', color: '#95A7C6', marginLeft: '0px', marginTop: '30px' }} />
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </Row>
                </Col>
            </div>
            <div className="bottombar">
                <Row>
                    <Col span={8}>
                        <ShrinkOutlined style={{ fontSize: '30px', color: '#35568D', marginLeft: '49px', marginTop: '17px' }} />
                        <p className="left">Profile</p>
                    </Col>
                    <Col span={8}>
                        <div className="QRcodecircle"><QrcodeOutlined style={{ fontSize: '37px', color: 'white', marginLeft: '13px', marginTop: '12px' }} /></div>
                        <p className="center">Scan QR Code</p>
                    </Col>
                    <Col span={8}>
                        <CodepenOutlined style={{ fontSize: '33px', color: '#95A7C6', marginLeft: '49px', marginTop: '12px', marginBottom: '4px' }} />
                        <p className="right">Applications</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default WelcomeNewUser;