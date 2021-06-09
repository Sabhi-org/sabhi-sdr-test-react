import React, { useState } from 'react';
import { Col, message, Row, Statistic, Spin } from 'antd';
import { useHistory } from 'react-router-dom';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';
import '../styles/SMS_verification_screen07.css';
import { sabhiApiInstance } from '../axios-instance';

export default function Smsverify() {
    let history = useHistory();
    const { Countdown } = Statistic;
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [third, setThird] = useState(0);
    const [four, setFour] = useState(0);
    const [isLoading, setLoading] = useState(false);

    async function confirmVerificationCode() {
        try {
            const verifyOtpValue = first + second + third + four;
            const response = await sabhiApiInstance.post('/otp/verify', {
                otp: verifyOtpValue,
            });
            if (!response.data.status) message.info(response.data.message);
            if (response.data.status) {
                message.success('otp verified!');
                history.push('/idready');
            }
        } catch (error) {
            message.error('something went wrong please try again!');
        }
    }

    function onChange(val) {
        if (4.95 * 1000 < val && val < 5 * 1000) {
            console.log('changed!');
        }
    }

    async function resendCode() {
        try {
            setLoading(true);
            const phoneNumber = localStorage.getItem('PhoneNumber');
            const response = await sabhiApiInstance.post('otp', {
                phoneNumber: phoneNumber,
            });
            if (response.data.status) {
                message.success('otp resent successfully!');
                setLoading(false);
            } else {
                message.info('something went wrong please try again');
            }
        } catch (error) {
            message.error('something went wrong please try again!');
        }
    }

    const handleChange = e => {
        const { maxLength, value, name } = e.target;
        switch (name) {
            case 'ssn-1':
                setFirst(value);
            case 'ssn-2':
                setSecond(value);
            case 'ssn-3':
                setThird(value);
            case 'ssn-4':
                setFour(value);
        }

        const [fieldName, fieldIndex] = name.split("-");
        // Check if they hit the max character length
        if (value.length >= maxLength) {
            // Check if it's not the last input field
            if (parseInt(fieldIndex, 10) < 4) {
                // Get the next input field
                const nextSibling = document.querySelector(
                    `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
                );
                // If found, focus the next field
                if (nextSibling !== null) {
                    nextSibling.focus();
                }
            }
        }

    }

    function goBack() {
        history.push('/phonev');
    }




    return (
        <Spin spinning={isLoading}>
            <div className="smsvscreen">
                <div className="containssms">
                    <Row>
                        <Col span={2}>
                            <LeftOutlined style={{ color: "#95A7C6" }} />
                        </Col>
                        <Col span={18}>
                            <small className="tinytextsmsv" onClick={goBack}>Back</small>
                        </Col>
                        <Col span={2}>
                            <QuestionCircleOutlined style={{ color: "#95A7C6", fontWeight: "500px", fontSize: "22px" }} />
                        </Col>
                        <Col span={2}>
                            <MoreOutlined style={{ color: "#95A7C6", fontWeight: "500px", fontSize: "22px" }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="smsvtitleone">
                                <p className="smsvtext">SMS</p>
                            </div>
                            <div className="smsvscreentitletwo">
                                <p className="smsvscreenv">Verification</p>
                            </div>
                        </Col>
                    </Row>
                    <Row span={24}>
                        <Col span={15}>
                            <div className="insidesmsv"></div>
                        </Col>
                        <Col span={9}>
                            <div className="barinsmsv"></div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="containssmsv">
                            <p className="smstextpara">A code has been sent to your primary</p>
                            <p className="smstextpara">number.Please enter the code to verify</p>
                            <p className="smstextpara">your number.</p>
                        </div>
                    </Row>
                    <Row>
                        <Col span={4} offset={2}>
                            <div className="smscodecontainer"> <input className="inputsinsms" maxlength="1" type="text" name="ssn-1" onChange={handleChange}></input></div>
                        </Col >
                        <Col span={4} offset={1}>
                            <div className="smscodecontainer"><input className="inputsinsms" maxlength="1" type="text" name="ssn-2" onChange={handleChange}></input></div>
                        </Col>
                        <Col span={4} offset={1}>
                            <div className="smscodecontainer"><input className="inputsinsms" maxlength="1" type="text" name="ssn-3" onChange={handleChange}></input></div>
                        </Col>
                        <Col span={4} offset={1}>
                            <div className="smscodecontainer"><input className="inputsinsms" maxlength="1" type="text" name="ssn-4" onChange={handleChange}></input></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Col span={9} offset={8}>
                                <p className="resendsms" onClick={resendCode}>Resend Code</p>
                            </Col>
                            {/* <Col span={9} offset={7}>
                                <p className="resendsmstwo">Wait 05:00 mins</p>
                            </Col> */}
                        </Col>
                    </Row>
                    <Row span={24}>
                        <div className="downed">
                            <Col span={21}>
                                <div className="smsvendbutton" onClick={confirmVerificationCode} type="primary" shape="round" size='large'>
                                    <p className="confirmsmsv">Confirm</p>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </div>
            </div>
        </Spin>
    );
}
