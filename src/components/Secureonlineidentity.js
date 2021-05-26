import React, { useState } from 'react';
import OnBoardImage from '../images/onboarding.png';
import { Col, Row, message, Spin } from 'antd';
import { useHistory } from 'react-router-dom';
import { apiInstance } from '../axios-instance';
import '../styles/Secureonlineidentity.css';

export default function Secureonlineidentity() {

    const [isLoading, setLoading] = useState(false);
    let history = useHistory();

    async function createIdentity() {
        try {
            message.loading('creating identity...', 0.3)
                .then(() => {
                    setLoading(true);
                });

            const response = await apiInstance.get('did');
            localStorage.setItem('DID', response.data.did);
            setLoading(false);
            message.success('Identity created succesfully!')
                .then(() => message.loading('redirecting...', 0.3)
                    .then(() => history.push('/Termsandcond')));
        } catch (error) {
            setLoading(false);
            message.error("something went wrong please try again!");
        }
    }

    function recoverIdentity() {
        message.info('this option will be available soon!');
    }



    return (
        <Spin spinning={isLoading}>
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
                        <div className="buttontwosecure" type="primary" shape="round" size='large' onClick={recoverIdentity}>
                            <p className="buttontwofontsecure">Recover</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="buttononesecure" onClick={createIdentity} type="primary" shape="round" size='large'>
                            <p className="buttononefontsecure">Create Sabhi ID</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Spin>
    );
}