import React from 'react';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined, CopyOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import girlandphone from '../images/onboarding2.png';
import '../styles/Make_sure_its_you_screen14.css';


export default function Makesure() {
    let history = useHistory();
    function thenextone() {
        history.push('/takeselfie');
    }
    return (
        <div className="makesurecover">
            <div className="abovemakesure">
                <Row>
                    <Col span={2} offset={2}>
                        <LeftOutlined style={{ color: "#F5F9FF" }} />
                    </Col>
                    <Col span={15}>
                        <small className="tinymakesure">Back</small>
                    </Col>
                    <Col span={2}>
                        <QuestionCircleOutlined style={{ color: "#F5F9FF", fontWeight: "500px", fontSize: "22px" }} />
                    </Col>
                    <Col span={2}>
                        <MoreOutlined style={{ color: "#F5F9FF", fontWeight: "500px", fontSize: "22px" }} />
                    </Col>
                </Row>
            </div>
            <Row span={24}>
                <Col offset={2}>
                    <img className="girllogo" src={girlandphone} />
                </Col>
            </Row>
            <Row span={24}>
                <Col span={12} offset={2}>
                    <div className="makesuretitleone">We need to</div>
                </Col>
            </Row>
            <Row span={24}>
                <Col span={19} offset={2}>
                    <div className="makesuretitletwo">make sure its you.</div>
                </Col>
            </Row>
            <Row span={24}>
                <Col offset={2}>
                    <div className="makesurethreedesconeinid">To secure your account, we need to</div>
                    <div className="makesuretwothreedesctwoinid">determine if its really you. You will be</div>
                    <div className="makesurescthreeinid">prompted to record a selfie.</div>
                </Col>
            </Row>

            <Row span={24}>
                <div className="stkmeingirlscreen">
                    <Col span={21} offset={1}>
                        <div className="buttonimmakesure" onClick={thenextone} type="primary" shape="round" size='large'>
                            <p className="buttononfornextinmakesure">Next</p>
                        </div>
                    </Col>
                </div>
            </Row>
        </div>
    );
}