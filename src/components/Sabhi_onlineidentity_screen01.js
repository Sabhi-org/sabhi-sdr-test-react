import React, { useEffect } from 'react';
import Logo from '../images/dark.svg';
import { Col, Row, Typography } from 'antd';
import { useHistory } from 'react-router-dom';
import '../styles/Sabhi_onlineidentity_screen01.css';

export default function Sabhionlineidentity() {
    let history = useHistory();
    const { Text } = Typography;

    // useEffect(() => {

    //     let interval = setTimeout(async () => {
    //         history.push('/Secureonlineidentity');
    //     }, 3000);

    //     // willUnmout called
    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, []);

    return (
        <div className="coverin">


            <Row span={24}>
                <Col span={8} offset={8}>
                    <div className="containsthelogo">
                        <img className="Screenlogo" src={Logo} />
                    </div>

                </Col>
            </Row>


            <Row span={24}>
                <Col span={5} offset={10}>
                    <div className="fontoneinfirstscreen">Sabhi</div>
                </Col>
            </Row>



            <Row span={24}>
                <Col span={14} offset={5}>
                    <div className="fonttwoinfirstscreen">Online Identity</div>
                </Col>
            </Row>

            <Row span={24}>
                <Col span={18} offset={5}>
                    <div className="itcontainscopyright">
                        <div className="fontthree">Copyright<b><span>&#169;</span></b> 2020, Sabhi and/or its affiliates.</div>
                        <Col offset={6}>
                            <div className="fontfour">All rights reserved.</div>
                        </Col>
                    </div>
                </Col>
            </Row>

            <Row span={24}>
                <Col>

                </Col>
            </Row>

        </div>
    );
}