import React from 'react';
import Logo from '../images/dark.svg';
import { Col, Row, Typography } from 'antd';
import '../Sabhionlineidentity.css';

export default function Sabhionlineidentity() {

    const { Text } = Typography;


    return (
        <div className="cover">


            <Row>
                <img class="Screenlogo" src={Logo} />
            </Row>


            <Row span={24}>
                <Col span={6} offset={9}>
                    <div className="fontone">Sabhi</div>
                </Col>
            </Row>



            <Row span={24}>
                <Col span={19} offset={5}>
                    <div className="fonttwo">Online Identity</div>
                </Col>
            </Row>

            <Row span={24}>
                <Col span={18} offset={5}>
                    <div className="fontthree">Copyright<b><span>&#169;</span></b> 2020, Sabhi and/or its affiliates.</div>
                    <Col offset={6}>
                        <div className="fontfour">All rights reserved.</div>
                    </Col>

                </Col>
            </Row>

            <Row span={24}>
                <Col>

                </Col>
            </Row>

        </div>
    );
}