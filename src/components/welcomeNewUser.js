import React from 'react';
import { Col, Row, Typography } from 'antd';
import { ShrinkOutlined, QrcodeOutlined, CodepenOutlined, SearchOutlined, RightOutlined } from '@ant-design/icons';

import '../styles/welcome.css';

export default function welcomeNewUser() {
    const btnStyle = { background: '#4DDFBC', bordeRadius: '16px', 'borderColor': '#4DDFBC' };
    const btnStyletwo = { background: '#FFFFFF', bordeRadius: '16px', 'borderColor': '#FFFFFF' };

    const { Text } = Typography;

    return (
        <div className="cover">

            <div className="background">

                {/* top font section of screen */}

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



                {/* first set of buttons side by side */}

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

                {/* personel information section */}

                <div className="fontfour">Personal Information</div>

                {/* scan id section */}

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

                    {/* record sefie section */}

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

                {/* end of personel information section */}

            </div>

            {/* bottom section of the screen */}

            <div className="bottombar">
                <div className="QRcodecircle"><QrcodeOutlined style={{ fontSize: '37px', color: 'white', marginLeft: '13px', marginTop: '12px' }} /></div>
                <Row className="bar">
                    <Col span={8}>
                        <ShrinkOutlined style={{ fontSize: '30px', color: '#35568D', marginLeft: '49px', marginTop: '17px' }} />
                        <p className="left">Profile</p>
                    </Col>
                    <Col span={8}>
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