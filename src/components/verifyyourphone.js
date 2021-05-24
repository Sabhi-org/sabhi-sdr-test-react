import React from 'react';
import '../styles/verifyphone.css';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined, RightOutlined, BorderOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import Guyimage from '../images/aguy.png';


export default function Verifyourphone() {
    let history = useHistory();
    function gotophonescreen() {


        history.push('/');
        console.log('clicked');

    }


    return (
        <div className="coverinverifyyourphone">


            <div className="abovespacing">
                <Row>
                    <Col span={2} offset={2}>
                        <LeftOutlined style={{ color: "#F5F9FF" }} />
                    </Col>
                    <Col span={15}>
                        <small className="tinytextinverification">Back</small>
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
                    <img className="largelogoverifyphone" src={Guyimage} />
                </Col>
            </Row>

            <Row span={24}>
                <Col span={12} offset={2}>
                    <div className="fontonesecureinphone">We need to</div>
                </Col>
            </Row>

            <Row span={24}>
                <Col span={19} offset={2}>
                    <div className="fonttwoidentityinverify">verify your phone</div>
                </Col>
            </Row>

            <Row span={24}>
                <Col offset={2}>
                    <div className="fontthreedesconeinverify">For easy log-ins every time, we'll need</div>
                    <div className="fontthreedesctwoinverify">to verify your phone number for</div>
                    <div className="fontthreedescthreeinverify">two-factor authentication.</div>
                </Col>
            </Row>

            <Row span={24}>
                <Col offset={2}>
                    <div className="fontfourverifyinverifyphone">Need help? View 2FA Verify FAQs</div>
                </Col>
            </Row>



            <Row span={24}>

                <Col span={21} offset={1}>
                    <div className="buttoninverifyingphone" onClick={gotophonescreen} type="primary" shape="round" size='large'>
                        <p className="buttononefontverification">Next</p>
                    </div>
                </Col>
            </Row>

        </div>
    );
}