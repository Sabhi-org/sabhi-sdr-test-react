import React from 'react';
import { Col, Row } from 'antd';
import '../styles/Take_front_picture_screen09.css';
import { useHistory } from 'react-router-dom';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';

export default function Takeaselfie() {

    let history = useHistory();
    function ontonext() {
        history.push('/welcome');
    }
    return (
        <div className="selfiepack">
            <div className="selfieabove">
                <Row>
                    <Col span={2} offset={2}>
                        <LeftOutlined style={{ color: "#F5F9FF" }} />
                    </Col>
                    <Col span={15}>
                        <small className="selfieback">Back</small>
                    </Col>
                    <Col span={2}>
                        <QuestionCircleOutlined style={{ color: "#F5F9FF", fontWeight: "500px", fontSize: "22px" }} />
                    </Col>
                    <Col span={2}>
                        <MoreOutlined style={{ color: "#F5F9FF", fontWeight: "500px", fontSize: "22px" }} />
                    </Col>
                </Row>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <div className="cameraforselfie">
                </div>
            </Row>
            <br></br>
            <Row>
                <Row span={24}>
                    <Col span={24} offset={2}>
                        <div className="selfieundercamone"> Please center your face in the marker</div>
                        <div className="selfieundercamtwo">to record a selfie.Make sure the selfie</div>
                        <div className="selfieundercamthree">is bright and clear.</div>
                    </Col>
                </Row>
            </Row>
            <Row span={24}>
                <div className="footbuttonselfie">
                    <Col span={21} offset={1}>
                        <div className="buttoninselfie" onClick={ontonext} type="primary" shape="round" size='large'>
                            <p className="selfiebuttonfont">Record Selfie</p>
                        </div>
                    </Col>
                </div>
            </Row>
        </div>
    );
}