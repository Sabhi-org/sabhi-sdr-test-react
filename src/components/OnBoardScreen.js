import React, { useEffect } from 'react';
import { Row, Col, Button, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { UserAddOutlined } from '@ant-design/icons';
import OnBoardImage from '../images/onboarding.png';
import '../App.css';

export default function OnBoardScreen() {
    let history = useHistory();
    const style = { display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '500px', height: '500px' };
    const btnStyle = { position: 'absolute', top: '600px', background: '#4DDFBC', bordeRadius: '16px', 'borderColor': '#4DDFBC' };

    const createIdentity = () => {
        message.success('i am hitting ...');
    }

    return (

        <div class="container" style={style}>
            <img src={OnBoardImage} width="200px" />
            <Button type="primary" shape="round" style={btnStyle} size='large' onClick={createIdentity}>
                Create Identity
            </Button>
        </div>


    );
}