
//importing react--------------------->
import React from 'react';
import { useHistory } from 'react-router-dom';

// importing antd components--------------->
import { Col, Row } from 'antd';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';

// importing css style files---------------------------->
import '../styles/Add_personal_details_screen12.css';




export default function Addpersonal() {
    let history = useHistory();
    function ontonextscreen() {
        history.push('/makesure');
    }
    return (
        <div className="addpersonalscreen">
            <div className="containspersonalinfo">
                <Row>
                    <Col span={2}>
                        <LeftOutlined style={{ color: "#95A7C6" }} />
                    </Col>
                    <Col span={18}>
                        <small className="backtextinpersonal">Back</small>
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
                        <div className="addpersoanltitle">
                            <p className="personaltitle">Personal</p>
                        </div>
                        <div className="cnicscreentitlw2">
                            <p className="addpersonalfont">Details</p>
                        </div>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={15}>
                        <div className="addpersonalbar"></div>
                    </Col>
                    <Col span={9}>
                        <div className="personalscreenbar"></div>
                    </Col>
                </Row>
                <Row>
                    <div className="personaldescription">
                        <p className="inperonalscreenevtextpara">Here are the details we scanned from</p>
                        <p className="inperonalscreenevtextpara">your ID document.Please review them</p>
                        <p className="inperonalscreenevtextpara">carefully.</p>
                    </div>
                </Row>
                <Row>
                    <Col span={18}>
                        <small className="tinytextinpersonalscreen">Full Name</small>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={24}>
                        <input className="inputsinpersonalscreen"></input>
                    </Col>
                </Row>
                <Row>
                    <Col span={18}>
                        <small className="tinytextinpersonalscreen">Father Name</small>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={24}>
                        <input className="inputsinpersonalscreen"></input>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={12}>
                        <Row>
                            <Col span={18}>
                                <small className="tinytextinpersonalscreen">Gender</small>
                            </Col>
                        </Row>
                        <Row span={24}>
                            <Col span={24}>
                                <input className="inputsinpersonalscreengender"></input>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Col span={18}>
                                <small className="tinytextinpersonalscreen">Country of Stay</small>
                            </Col>
                        </Row>
                        <Row span={24}>
                            <Col span={24}>
                                <input className="inputsinpersonalscreenstay"></input>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={18}>
                        <small className="tinytextinpersonalscreen">CNIC number</small>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={24}>
                        <input className="inputsinpersonalscreen"></input>
                    </Col>
                </Row>
                <Row>
                    <Col span={18}>
                        <small className="tinytextinpersonalscreen">Date of Birth</small>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={24}>
                        <input className="inputsinpersonaldate"></input>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={12}>
                        <Row>
                            <Col span={18}>
                                <small className="tinytextinpersonalscreen">Issue Date</small>
                            </Col>
                        </Row>
                        <Row span={24}>
                            <Col span={24}>
                                <input className="inputsinpersonalissue"></input>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Col span={18}>
                                <small className="tinytextinpersonalscreen">Expiry Date</small>
                            </Col>
                        </Row>
                        <Row span={24}>
                            <Col span={24}>
                                <input className="inputsinpersonalscreen"></input>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row span={24}>
                    <div className="personalscreenstick">
                        <Col span={21}>
                            <div className="buttoninperscreen" onClick={ontonextscreen} type="primary" shape="round" size='large'>
                                <p className="continuefrompersonalscreen">Continue</p>
                            </div>
                        </Col>
                    </div>
                </Row>
            </div>
        </div>
    );
}