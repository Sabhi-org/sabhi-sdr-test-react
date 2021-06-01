
// importing react and its components---->
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// importing antd components-------->
import { Col, Row, Button, Checkbox } from 'antd';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined, BorderOutlined } from '@ant-design/icons';

// importing css style files--------------------->
import '../styles/Few_more_steps_screen04.css';


export default function Fewmoresteps() {

    const [disable, setDisable] = useState(true);

    const btncontinuestyle = {
        width: '100%',
        height: '56px',
        background: '#4DDFBC',
        borderRadius: '16px',
        marginTop: '37px',
        border: 'none'
    };

    const checkBoxstyle = {
        fontSize: '22px',
        color: '#686868',
        marginLeft: '0px',
        marginTop: '30px'
    }

    let history = useHistory();
    function gotomoresteps() {
        history.push('/verifyyourphone');
        console.log('clicked');
    }

    function goBack() {
        history.push('/Termsandcond');
    }

    return (
        <div className="screenofmore">
            <div className="containsfewscreen">
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
                        <div className="fewtermstitleone">
                            <p className="fewtermstext">Just a</p>
                        </div>
                        <div className="fewtermstitletwo">
                            <p className="fewmorecondi">few more steps</p>
                        </div>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={7}>
                        <div className="morestepsbarsmallbit"></div>
                    </Col>
                    <Col span={17}>
                        <div className="morestepsbar"></div>
                    </Col>
                </Row>
                <Row>
                    <div className="containsfewmoretermstext">
                        <p className="fewmorestepstextpara">Follow through the steps to setup your</p>
                        <p className="fewmorestepstextpara">Sabhi ID.You'll be required to provide</p>
                        <p className="fewmorestepstextpara">the following</p>
                    </div>
                </Row>
                <Col span={24}>
                    <Row>
                        {/* <div className="hovercover">
                            sasasa
                        </div> */}
                        <div className="buttonthreeinfewmore" onClick={() => setDisable(false)} type="primary" shape="round" size='large'>
                            <Col span={24}>
                                <Row>
                                    <Col span={4}>
                                        <div className="blockoneinfewmoreterms"></div>
                                    </Col>
                                    <Col span={16}>
                                        <p className="buttonthreeinfewmorefont">Phone Verification</p>
                                        <p className="fewmorestepsverification">Verify your phone number</p>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </Row>
                    <Row>
                        <div className="buttonfourinfewmoresteps" type="primary" shape="round" size='large'>
                            <Col span={24}>
                                <Row>
                                    <Col span={4}>
                                        <div className="blocktwoinfewmoresteps"></div>
                                    </Col>
                                    <Col span={16}>
                                        <p className="buttonfourinsteps">Enable Biometrics</p>
                                        <p className="fewmoreageverificationtwo">Secure your ID</p>
                                    </Col>
                                    <Col>
                                        <Checkbox style={checkBoxstyle}></Checkbox>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </Row>
                    <Row>
                        <div className="buttonfourinfewmoresteps" type="primary" shape="round" size='large'>
                            <Col span={24}>
                                <Row>
                                    <Col span={4}>
                                        <div className="blocktwoinfewmoresteps"></div>
                                    </Col>
                                    <Col span={16}>
                                        <p className="buttonfourinsteps">Cloud Backup</p>
                                        <p className="fewmoreageverificationtwo">Backup your ID for safety</p>
                                    </Col>
                                    <Col>
                                        <Checkbox style={checkBoxstyle}></Checkbox>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </Row>
                </Col>
                <Row span={24}>
                    <div className="sticktobottomposition">
                        <Col span={21}>
                            <Button type="primary" style={btncontinuestyle} onClick={gotomoresteps} disabled={disable}><p className="buttontwofontinfewmoresteps">Continue</p></Button>
                        </Col>
                    </div>
                </Row>
            </div>
        </div>
    );
}