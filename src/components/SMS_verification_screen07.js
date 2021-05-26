import React from 'react'; import { Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';
import '../styles/SMS_verification_screen07.css';

export default function Smsverify() {
    let history = useHistory();
    function tothenext() {


        history.push('/idready');
        console.log('clicked');

    }

    const numOfFields = 4;

    const handleChange = e => {
        const { maxLength, value, name } = e.target;
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
    return (
        <div className="smsvscreen">
            <div className="containssms">
                <Row>
                    <Col span={2}>
                        <LeftOutlined style={{ color: "#95A7C6" }} />
                    </Col>
                    <Col span={18}>
                        <small className="tinytextsmsv">Back</small>
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
                            <p className="resendsms">Resend Code</p>
                        </Col>
                        <Col span={9} offset={7}>
                            <p className="resendsmstwo">Wait 05:00 mins</p>
                        </Col>
                    </Col>
                </Row>
                <Row span={24}>
                    <div className="downed">
                        <Col span={21}>
                            <div className="smsvendbutton" onClick={tothenext} type="primary" shape="round" size='large'>
                                <p className="confirmsmsv">Confirm</p>
                            </div>
                        </Col>
                    </div>
                </Row>
            </div>
        </div>
    );
}