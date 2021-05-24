import React from 'react';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined, RightOutlined, BorderOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import ding3 from '../images/ding3.png';
import '../styles/idready.css';

export default function IDready() {

    let history = useHistory();
    function gotophonescreen() {


        history.push('/');
        console.log('clicked');

    }
    return (
        <div className="coverinverifyyourphone">


            <div className="abovespacinginID">
                <Row>
                    <Col span={2} offset={2}>
                        <LeftOutlined style={{ color: "#F5F9FF" }} />
                    </Col>
                    <Col span={15}>
                        <small className="tinytextinid">Back</small>
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
                    <img className="largeid" src={ding3} />
                </Col>
            </Row>

            <Row span={24}>
                <Col span={12} offset={2}>
                    <div className="fontoneid">Keep your</div>
                </Col>
            </Row>

            <Row span={24}>
                <Col span={19} offset={2}>
                    <div className="fonttwoinid">ID ready for scan.</div>
                </Col>
            </Row>

            <Row span={24}>
                <Col offset={2}>
                    <div className="fontthreedesconeinid">your National Identity Card [] will</div>
                    <div className="fontthreedesctwoinid">be scanned from front to back</div>
                    <div className="fontthreedescthreeinid">Please focus it inside the marker.</div>
                </Col>
            </Row>

            <Row span={24}>
                <Col offset={2}>
                    <div className="fontfourveriid">Need help? View scanning FAQs</div>
                </Col>
            </Row>



            <Row span={24}>
                <Col span={21} offset={1}>
                    <div className="buttoninidscreen" onClick={gotophonescreen} type="primary" shape="round" size='large'>
                        <p className="buttononforscanning">Start Scanning</p>
                    </div>
                </Col>
            </Row>

        </div>
    );
}