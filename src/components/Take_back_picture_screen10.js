import React from 'react';
import { Col, Row } from 'antd';
import '../styles/Take_back_picture_screen10.css';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';


export default function Takebackpic() {

    let history = useHistory();

    function gotonextscreen() {
        history.push('/checkpics');
    }
    return (
        <div className="backpicback">
            <div className="backpicabove">
                <Row>
                    <Col span={2} offset={2}>
                        <LeftOutlined style={{ color: "#F5F9FF" }} />
                    </Col>
                    <Col span={15}>
                        <small className="samlltextintheback">Back</small>
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
                <div className="continerforcameraforback">
                </div>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <Row span={24}>
                    <Col span={24} offset={2}>
                        <div className="textbackundercamone"> Please take the picture of the back of the</div>
                        <div className="textbackundercamtwo">ID card.Make sure it is not blurry or</div>
                        <div className="textbackundercamthree">dark and is inside the marker.</div>
                    </Col>
                </Row>
            </Row>
            <Row span={24}>
                <div className="footbuttonbackcam">
                    <Col span={21} offset={1}>
                        <div className="buttoninidscreenbackcam" onClick={gotonextscreen} type="primary" shape="round" size='large'>
                            <p className="buttononforbackcam">Scan Back</p>
                        </div>
                    </Col>
                </div>
            </Row>
        </div>
    );
}