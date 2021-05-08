import React from 'react';
import { Col, Row, Typography } from 'antd';

import '../welcome.css';

export default function welcomeNewUser() {
    const btnStyle = { background: '#4DDFBC', bordeRadius: '16px', 'borderColor': '#4DDFBC' };
    const btnStyletwo = { background: '#FFFFFF', bordeRadius: '16px', 'borderColor': '#FFFFFF' };

    const { Text } = Typography;

    return (
        <div className="background">


            <div className="fontone">Welcome,</div>
            <div className="fonttwo">New User!</div><br></br>
            <div className="fontthree">Profile</div><br></br>


            <Row>
                <Col span={8}>
                    <div className="buttonone" type="primary" shape="round" size='large'>
                        <p className="buttononefont">Personal</p>
                    </div>
                </Col>
                <Col span={16}>
                    <div className="buttontwo" type="primary" shape="round" size='large'>
                        <p className="buttontwofont">+ Add New Buisness</p>
                    </div>
                </Col>
            </Row>


            <div className="fontfour">Personal Information</div>

            <Col span={24}>
                <Row>
                    <div className="buttonthree" type="primary" shape="round" size='large'>
                        <p className="buttontwofont">Scan ID Card</p>
                    </div>
                </Row>
                <Row>
                    <div className="buttonfour" type="primary" shape="round" size='large'>
                        <p className="buttontwofont">Record Selfie</p>
                    </div>
                </Row>
            </Col>
        </div>
    );
}