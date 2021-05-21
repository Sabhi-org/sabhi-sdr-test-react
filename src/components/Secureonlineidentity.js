import React from 'react';
import OnBoardImage from '../images/onboarding.png';
import { Col, Row, Typography } from 'antd';
import { useHistory } from 'react-router-dom';

import '../styles/Secureonlineidentity.css';

export default function Secureonlineidentity() {
    let history = useHistory();

    function gotonextscreen() {
        history.push('/Termsandcond');
        console.log('clicked');
    }
    return (
        <div className="cover">


            <Row span={24}>
                <Col offset={2}>
                    <img className="largelogo" src={OnBoardImage} />
                </Col>
            </Row>

            <Row span={24}>
                <Col span={6} offset={2}>
                    <div className="fontonesecure">Secure</div>
                </Col>
            </Row>

            <Row span={24}>
                <Col span={19} offset={2}>
                    <div className="fonttwoidentity">Online Identity</div>
                </Col>
            </Row>

            <Row span={24}>
                <Col offset={2}>
                    <div className="fontthreedescone">Your online buisness identity, secure</div>
                    <div className="fontthreedesctwo">at your fingertips. Send credentials to</div>
                    <div className="fontthreedescthree">a Sabhi 3rd party service.</div>
                </Col>
            </Row>

            <Row span={24}>
                <Col offset={2}>
                    <div className="fontfourverify">View privacy policy</div>
                </Col>
            </Row>



            <Row span={24}>
                <Col offset={2}>
                    <div className="buttontwosecure" type="primary" shape="round" size='large'>
                        <p className="buttontwofontsecure">Recover</p>
                    </div>
                </Col>
                <Col>
                    <div className="buttononesecure" onClick={gotonextscreen} type="primary" shape="round" size='large'>
                        <p className="buttononefontsecure">Create Sabhi ID</p>
                    </div>
                </Col>
            </Row>

        </div>
    );
}