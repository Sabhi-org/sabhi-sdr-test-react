import React from 'react';
import { Col, Row } from 'antd';
import '../styles/Take_front_picture_screen09.css';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';


export default function Takefrontpicture() {
    return (
        <div className="frontpicback">
            <div className="frontpicabove">
                <Row>
                    <Col span={2} offset={2}>
                        <LeftOutlined style={{ color: "#F5F9FF" }} />
                    </Col>
                    <Col span={15}>
                        <small className="samlltextback">Back</small>
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
            <br></br>
            <br></br>

            <Row>
                <div className="continerforcamera">

                </div>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <Row span={24}>
                    <Col span={24} offset={2}>
                        <div className="textundercamone"> Please take the picture of the front of the</div>
                        <div className="textundercamtwo">ID card.Make sure it is not blurry or</div>
                        <div className="textundercamthree">dark and is inside the marker.</div>
                    </Col>
                </Row>
            </Row>


            <Row span={24}>
                <div className="footbutton">
                    <Col span={21} offset={1}>
                        <div className="buttoninidscreen" type="primary" shape="round" size='large'>
                            <p className="buttononforscanning">Start Scanning</p>
                        </div>
                    </Col>
                </div>
            </Row>
        </div>
    );
}