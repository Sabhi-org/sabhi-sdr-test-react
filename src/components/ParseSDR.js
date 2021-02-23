// importing bootstrap elements------->
import { Input, Form, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

// importing hooks and axios------------>
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

// importing css files----------------->
import '../App.css';

export default function ParseSDR() {

    let [myuri, setmyuri] = useState(" ");


    useEffect(() => {
        fetchProducts()
    }, [])



    const fetchProducts = async () => {
        try {

            // const response = await axios.get('https://sabhi-task.com/user/uri');
            const response = await axios.get('https://sabhi-task.com/user/uri');
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
            <TextArea
                // value={value}
                // onChange={onChange}
                placeholder="uri generate here..."
                autoSize={{ minRows: 8, maxRows: 12 }}
            />
            <Button type="primary" onClick={handleClick} shape="round" size='large' style={{ marginTop: 10 }}>Parse SDR</Button>
        </Form>
    );
}