import React from 'react';
import { Col, Row } from 'antd';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';
import '../styles/termsandc.css';

export default function TermsandCOnditions() {
    return (
        <div className="screening">
            <div className="containsscreen">



                <Row>
                    <Col span={2}>
                        <LeftOutlined style={{ color: "#95A7C6" }} />
                    </Col>
                    <Col span={18}>
                        <small className="tinytext">Back</small>
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
                            <p>Conditions</p>
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
            </div>
        </div>
    );
}