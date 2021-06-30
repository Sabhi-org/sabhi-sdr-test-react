import React from 'react';
import '../styles/Closed_for_maintainance.css';
import { Row, Col } from 'antd';
import logoofsabhi from '../images/dark.svg';

export default function closeForMaintainance() {
    return (
        <div className="containsbackofsorry">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <Col span={2} offset={7}>
                    <img className="logoofsabhi" src={logoofsabhi} />
                </Col>
                <Col span={8}>
                    <h1 className="titleofsorry">We'll be back soon!</h1>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    <h1 className="Paraofsorry">At the moment our website is under maintainance we will be online as soon as possible.</h1>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    <h1 className="Yhankyousorry">Thank you.</h1>
                </Col>
            </Row>

        </div>
    );
}