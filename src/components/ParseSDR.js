// importing bootstrap elements------->
import { Input, Form, Button, Row, Col } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

// importing hooks and axios------------>
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

// importing css files----------------->
import '../App.css';

export default function ParseSDR() {
    //const { TextArea } = Input;
    let [myuri, setmyuri] = useState(" ");


    useEffect(() => {
        fetchProducts()
    }, [])

    const { TextArea } = Input;

    const fetchProducts = async () => {
        try {

            // const response = await axios.get('https://sabhi-task.com/user/uri');
            const response = await axios.get('http://localhost:12345/user/uri');
            console.log(response.data.data.uri);
            setmyuri(response.data.data.uri);
            console.log(myuri);

        } catch (error) {
            console.log(error);
        }
    }



    // using history hook to navigate-------->
    const history = useHistory();
    function handleClick() {
        history.push({
            pathname: "/parse_sdr",
            // state: {
            //     uri: myuri
            // }
        });
    }

    return (
        <Form>
            <div>

            </div>
            <TextArea
                value={myuri}
                // onChange={onChange}
                placeholder="uri generate here..."
                autoSize={{ minRows: 8, maxRows: 12 }}
                style={{ marginTop: 30 }}
            />
            <Row>
                <Col span={8} offset={10}>
                    <Button type="primary" onClick={handleClick} shape="round" size='large' style={{ marginTop: 10 }}>Parse SDR</Button>
                </Col>
            </Row>

        </Form>
    );
}