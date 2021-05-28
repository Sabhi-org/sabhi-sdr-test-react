
// importing react and its components------->
import React from 'react';
import { useHistory } from 'react-router-dom';

// importing antd components--------------------->
import { Col, Row, Carousel } from 'antd';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';


// importing images-------------------------------------->
import frontidpic from '../images/idcard_front.jpeg';
import backidpic from '../images/id_card_back.jpg';


// importing style files--------------------------->
import '../styles/Check_the_scans_screen11.css';



export default function Checkthescans() {
    let history = useHistory();

    function nextscreen() {
        history.push('/addpersonal');
    }
    function onChange(a, b, c) {
        console.log(a, b, c);
    }
    return (
        <div className="checkscreencover">
            <div className="checkscreenbove">
                <Row>
                    <Col span={2} offset={2}>
                        <LeftOutlined style={{ color: "#F5F9FF" }} />
                    </Col>
                    <Col span={15}>
                        <small className="checkscreensmalltext">Back</small>
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
                <div className="containerforcarosoul">
                    <Carousel className="imageslider" afterChange={onChange}>
                        <div>
                            <img className="fittheimage" src={frontidpic} />
                        </div>
                        <div>
                            <img className="fittheimage" src={backidpic} />
                        </div>
                    </Carousel>
                </div>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <Row span={24}>
                    <Col span={24} offset={2}>
                        <div className="checktextone"> Please check the previews. if your</div>
                        <div className="checktexttwo">scans are blurry, you can re-take the</div>
                        <div className="checktextthree">picture for better results.</div>
                    </Col>
                </Row>
            </Row>
            <Row span={24}>
                <div className="stickybottomchecks">
                    <Row span={24}>
                        <Col offset={2}>
                            <div className="buttontwoinchecks" type="primary" shape="round" size='large'>
                                <p className="buttontwofontchecks">Decline</p>
                            </div>
                        </Col>
                        <Col >
                            <div className="buttononeinchecks" onClick={nextscreen} shape="round" size='large'>
                                <p className="buttononefontincecks">Accept</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Row>
        </div>
    );
}