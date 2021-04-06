import React, { useEffect } from 'react';
import { Row, Col, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import Logo from '../images/dark.svg';
import '../App.css';

export default function SplashScreen() {
    let history = useHistory();
    const style = { display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '500px', height: '500px' };

    // useEffect(() => {

    //     let interval = setTimeout(async () => {
    //         history.push('/parse_sdr');
    //     }, 3000);



    //     // willUnmout called
    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, []);

    return (

        // <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
        //     <Col>
        //         <img src={Logo} style={{ verticalAlign: 'middle' }} />
        //     </Col>
        // </Row>

        <div class="container" style={style}>
            <img src={Logo} width="200px" />
        </div>


    );
}