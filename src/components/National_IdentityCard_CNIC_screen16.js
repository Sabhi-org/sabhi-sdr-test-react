
// importing react and its components----->
import React from 'react';
import { useHistory } from 'react-router-dom';

// importing antd components------------->
import { Col, Row } from 'antd';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';

// importing css style files----------------------------------->
import '../styles/National_IdentityCard_CNIC_screen16.css';

export default function Nationalidentitycard() {
    return (
        <div className="cnicscreen">
            <div className="containsnic">
                <Row>
                    <Col span={2}>
                        <LeftOutlined style={{ color: "#95A7C6" }} />
                    </Col>
                    <Col span={18}>
                        <small className="cnicback">Back</small>
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
                        <div className="cnicscreentitle">
                            <p className="nicscreentitle">National</p>
                        </div>
                        <div className="personaltitlw2">
                            <p className="nationalfont">Identity Card (CNIC)</p>
                        </div>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={15}>
                        <div className="cnicinbar"></div>
                    </Col>
                    <Col span={9}>
                        <div className="cnibarscreenbar"></div>
                    </Col>
                </Row>
                <Row>
                    <div className="nicdescription">
                        <p className="cnicnationaltextpara">Here are the details we scanned from</p>
                        <p className="cnicnationaltextpara">your ID document.You can also</p>
                        <p className="cnicnationaltextpara">preview the scanned document.</p>
                    </div>
                </Row>
                <Row>
                    <Col span={18}>
                        <small className="tinytextinnicscreen">Full Name</small>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={24}>
                        <input className="inputsinpersocnicscreens"></input>
                    </Col>
                </Row>
                <Row>
                    <Col span={18}>
                        <small className="tinytextinpersonalscreen">Last Name</small>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={24}>
                        <input className="inputsinpersonalscreen"></input>
                    </Col>
                </Row>
                <Row>
                    <Col span={18}>
                        <small className="tinytextinpersonalscreen">Street Address</small>
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
                                <small className="tinytextinpersonalscreen">City</small>
                            </Col>
                        </Row>
                        <Row span={24}>
                            <Col span={24}>
                                <input className="inputsincnicscreengender"></input>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Col span={18}>
                                <small className="tinytextinpersonalscreen">Postal Code</small>
                            </Col>
                        </Row>
                        <Row span={24}>
                            <Col span={24}>
                                <input className="inputsincnicscreenstay"></input>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={18}>
                        <small className="tinytextinpersonalscreen">Country of Residence</small>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={24}>
                        <input className="inputsinpersonalscreen"></input>
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
                    <div className="nicscreenstick">
                        <Row span={24}>
                            <Col span={9} offset={1}>
                                <div className="buttonincnicscreen" type="primary" shape="round" size='large'>
                                    <p className="continuecnicscreen">Preview</p>
                                </div>
                            </Col>
                            <Col span={9} offset={1}>
                                <div className="buttonincnicscreen2" shape="round" size='large'>
                                    <p className="continuecnicscreen2">Done</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </div>
        </div>
    );
}