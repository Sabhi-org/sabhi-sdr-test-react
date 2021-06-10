
// importing react and its components-------->
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


// importing antd components------------->
import { Col, message, Row, Spin } from 'antd';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';
import { sabhiApiInstance } from '../axios-instance';

// importing css stylefiles---------------------------->
import PhoneInput from 'react-phone-input-2'
import '../styles/Phone_verification_screen06.css';


export default function Phonev() {


    let history = useHistory();
    const [input, setInput] = useState(0);
    const [isLoading, setLoading] = useState(false);

    async function handleClick() {
        try {
            localStorage.setItem('PhoneNumber', input);
            setLoading(true);
            const response = await sabhiApiInstance.post('otp', { phoneNumber: input });
            if (response.data.status) {
                setLoading(false);
                message.loading('redirecting')
                    .then(() => {
                        history.push('/smsverify');
                    })
            } else {
                message.warning('something went wrong please try again!');
            }

        } catch (error) {
            setLoading(false);
            message.error(error.message);
        }
    }

    function goBack() {
        history.push('/verifyyourphone');
    }






    return (
        <Spin spinning={isLoading}>
            <div className="phonevscreen">
                <div className="containsphonev">
                    <Row>
                        <Col span={2}>
                            <LeftOutlined style={{ color: "#95A7C6" }} />
                        </Col>
                        <Col span={18}>
                            <small className="tinytextinphonev" onClick={goBack}>Back</small>
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
                            <div className="phinevtitleone">
                                <p className="phinevtext">Phone</p>
                            </div>
                            <div className="verifyphinescreentitletwo">
                                <p className="phonescreenv">Verification</p>
                            </div>
                        </Col>
                    </Row>
                    <Row span={24}>
                        <Col span={15}>
                            <div className="insidephonev"></div>
                        </Col>
                        <Col span={9}>
                            <div className="barinphonev"></div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="containsphinevtext">
                            <p className="inphonevtextpara">Please enter your primary phone</p>
                            <p className="inphonevtextpara">number. An SMS with a code will be</p>
                            <p className="inphonevtextpara">sent to you.</p>
                        </div>
                    </Row>
                    <Row>
                        <Col span={18}>
                            {/* <small className="tinytextinphonev">Primary phone Number</small> */}
                        </Col>
                    </Row>
                    <Row span={24}>
                        <Col span={24}>
                            {/* <div className="barinphonev2"></div> */}
                            {/* <input className="inputs"></input> */}
                            <PhoneInput

                                country={'pk'}
                                onChange={phone => setInput(phone)}
                            />
                        </Col>
                    </Row>
                    <Row span={24}>
                        <div className="imgoingtostick">
                            <Col span={21}>
                                <div className="buttonattheendofphonev" onClick={handleClick} type="primary" shape="round" size='large'>
                                    <p className="continuefromphoinv">Continue</p>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </div>
            </div>
        </Spin>
    );
}
