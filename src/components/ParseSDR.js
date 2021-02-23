// importing bootstrap elements------->
import { Button, Form } from 'react-bootstrap';

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
            state: {
                uri: myuri
            }
        });
    }



    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>SDR uri</Form.Label>
                <Form.Control as="textarea" rows={10} value={myuri} />
            </Form.Group>
            <Form.Group>
                <Button variant="success" onClick={handleClick}>Parse SDR</Button>
            </Form.Group>
        </Form>
    );
}