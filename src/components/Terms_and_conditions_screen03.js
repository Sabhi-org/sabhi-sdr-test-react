import React, { useState } from 'react';
import { Col, message, Row, Button } from 'antd';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined, RightOutlined, BorderOutlined } from '@ant-design/icons';
import '../styles/Terms_and_conditions_screen03.css';
import { useHistory } from 'react-router-dom';
import { Checkbox } from 'antd';

export default function TermsandCOnditions() {


    let history = useHistory();

    const [disable, setDisable] = useState(true);

    const btnDeclinestyle = {
        width: '150px',
        height: '56px',
        background: '#FFFFFF',
        borderRadius: '16px',
        marginLeft: '0px',
        border: 'none'
    };

    const scheckBoxstyle = {
        fontSize: '22px',
        color: '#686868',
        marginLeft: '0px',
        marginTop: '30px'
    };



    const [age, setAge] = useState();
    const [country, setCountry] = useState();

    function acceptTermsAndConditions() {
        if (!age || !country) message.info('please accept terms and condition');
        else history.push('/fewmoresteps');
    }

    function declineTermsAndCondition() {
        history.push('/');
    }

    function onChangeAgeCheckBox(e) {
        setAge(e.target.checked);
    }

    function onChangeCountryCheckBox(e) {
        setCountry(e.target.checked);
    }

    function goBack() {
        history.push('/Secureonlineidentity')
    }


    return (
        <div className="containsscreen">
            <Col span={24}>
                <Row>
                    <Col span={2}>
                        <LeftOutlined style={{ color: "#95A7C6" }} />
                    </Col>
                    <Col span={18}>
                        <small className="tinytext" onClick={goBack}>Back</small>
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
                        <div className="termstitleone">
                            <p className="termstext">Terms and</p>
                        </div>
                        <div className="termstitletwo">
                            <p className="condi">Conditions</p>
                        </div>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={1}>
                        <div className="barsmallbit"></div>
                    </Col>
                    <Col span={23}>
                        <div className="bar"></div>
                    </Col>
                </Row>
                <Row>
                    <div className="containstermstext">
                        <p className="termstextpara">when you apply to this application,</p>
                        <p className="termstextpara">you'll be agreeing to the following</p>
                        <p className="termstextpara">terms and condition</p>
                    </div>
                </Row>
                <Col span={24}>
                    <Row>
                        <div className="buttonthreeinterms" type="primary" shape="round" size='large'>
                            <Col span={24}>
                                <Row>
                                    <Col span={4}>
                                        <div className="blockoneinterms"></div>
                                    </Col>
                                    <Col span={16}>
                                        <p className="buttonthreeintermsfont">Over 18 years</p>
                                        <p className="termsageverification">Age Verification</p>
                                    </Col>
                                    <Col>
                                        <Checkbox onChange={onChangeAgeCheckBox} style={scheckBoxstyle}></Checkbox>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </Row>
                    <Row>
                        <div className="buttonfourinterms" type="primary" shape="round" size='large'>
                            <Col span={24}>
                                <Row>
                                    <Col span={4}>
                                        <div className="blocktwointerms"></div>
                                    </Col>
                                    <Col span={16}>
                                        <p className="buttonfourintermsfont">Pakistan</p>
                                        <p className="termsageverificationtwo">Country Verification</p>
                                    </Col>
                                    <Col>
                                        <Checkbox onChange={onChangeCountryCheckBox} style={scheckBoxstyle}></Checkbox>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </Row>
                </Col>
                <Row>
                    <div className="containstermstext">
                        <p className="termstextpara"><small><b>terms and Conditions</b></small></p>
                        <p className="termstextpara">Lorem ipsum dolor sit amet,</p>
                        <p className="termstextpara">consectetur adipiscing elit,</p>
                        <p className="termstextpara">sed do eiusmod tempor incididunt</p>
                    </div>
                </Row>
                <Row span={24}>
                    <div className="stickybottom">
                        <Row span={24}>
                            <Col>
                                <Button type="primary" style={btnDeclinestyle} onClick={declineTermsAndCondition}><p className="buttontwofontinterms">Decline</p></Button>
                                {/* <div className="buttontwointerms" onClick={declineTermsAndCondition} type="primary" shape="round" size='large'>
                                    <p className="buttontwofontinterms">Decline</p>
                                </div> */}
                            </Col>
                            <Col>
                                <div className="buttononeinterms" onClick={acceptTermsAndConditions} shape="round" size='large'>
                                    <p className="buttononefontinterms">Accept</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Col>
        </div>
    );
}
