import React from 'react';
import OnBoardImage from '../images/onboarding.png';
import { Col, Row, Typography } from 'antd';

import '../Secureonlineidentity.css';

export default function Secureonlineidentity() {
    return (
        <div className="cover">


            <Row span={24}>
                <Col offset={2}>
                    <img className="largelogo" src={OnBoardImage} />
                </Col>
            </Row>

            <Row span={24}>
                <Col span={6} offset={2}>
                    <div className="fontone">Secure</div>
                </Col>
            </Row>

            <Row span={24}>
                <Col span={19} offset={2}>
                    <div className="fonttwo">Online Identity</div>
                </Col>
            </Row>

            <Row span={24}>
                <Col>
                    <div className="fontthree">hello</div>
                </Col>
            </Row>

        </div>
    );
}