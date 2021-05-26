import React from 'react';
import { Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';
import '../styles/Phone_verification_screen06.css';


export default function Phonev() {
    let history = useHistory();
    function gotosmsscreen() {


        history.push('/smsverify');
        console.log('clicked');

    }
    return (
        <div className="phonevscreen">
            <div className="containsphonev">
                <Row>
                    <Col span={2}>
                        <LeftOutlined style={{ color: "#95A7C6" }} />
                    </Col>
                    <Col span={18}>
                        <small className="tinytextinphonev">Back</small>
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
                        <small className="tinytextinphonev">Primary phone Number</small>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={24}>
                        {/* <div className="barinphonev2"></div> */}
                        <input className="inputs"></input>
                    </Col>
                </Row>
                <Row span={24}>
                    <div className="imgoingtostick">
                        <Col span={21}>
                            <div className="buttonattheendofphonev" onClick={gotosmsscreen} type="primary" shape="round" size='large'>
                                <p className="continuefromphoinv">Continue</p>
                            </div>
                        </Col>
                    </div>
                </Row>
            </div>
        </div>
    );
}