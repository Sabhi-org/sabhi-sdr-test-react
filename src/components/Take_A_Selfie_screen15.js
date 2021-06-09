import React, { useState } from 'react';
import { Col, Row, Spin, message } from 'antd';
import '../styles/Take_front_picture_screen09.css';
import { useHistory } from 'react-router-dom';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { sabhiApiInstance } from '../axios-instance';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "auto",
        textAlign: 'center',
    },
    imgBox: {
        maxWidth: "100%",
        maxHeight: "auto",
        margin: "0px"
    },
    img: {
        width: "100%",
        height: "auto",
    },
    input: {
        display: "none"
    }

}));

export default function Takeaselfie() {

    const [isDisabled, setDisable] = useState(false);
    const [base64, setBase64] = useState('');
    const [isLoading, setLoading] = useState(false);

    let history = useHistory();
    
    async function ontonext() {
        try {
            setLoading(true);
            console.log(localStorage.getItem('DID'));
            console.log(base64);
            const response = await sabhiApiInstance.put('ocr/profile', {
                did: localStorage.getItem('DID'),
                profileImage: base64,
            });
            console.log(response.data);
            if (response.data.status) {
                setLoading(false);
                history.push('/cnic');
            }
            else {
                setLoading(false);
                message.warning('something went wrong, please try again!');
            }
        } catch (error) {
            setLoading(false);
            message.error('something went wrong,  please try again!');
        }

    }

    function gotonextscreen() {
        history.push('/cnic');
    }

    const classes = useStyles();
    const [source, setSource] = useState("");
    const handleCapture = (target) => {
        if (target.files) {
            if (target.files.length !== 0) {
                const file = target.files[0];
                const newUrl = URL.createObjectURL(file);
                setSource(newUrl);
                getBase64(file, result => {
                    setBase64(result);
                });
            }
        }
    };

    const getBase64 = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }


    return (
        <Spin spinning={isLoading} tip="Image matching in progress...">
            <div className="selfiepack">
                {/* <div className="selfieabove">
                <Row>
                    <Col span={2} offset={2}>
                        <LeftOutlined style={{ color: "#F5F9FF" }} />
                    </Col>
                    <Col span={15}>
                        <small className="selfieback">Back</small>
                    </Col>
                    <Col span={2}>
                        <QuestionCircleOutlined style={{ color: "#F5F9FF", fontWeight: "500px", fontSize: "22px" }} />
                    </Col>
                    <Col span={2}>
                        <MoreOutlined style={{ color: "#F5F9FF", fontWeight: "500px", fontSize: "22px" }} />
                    </Col>
                </Row>
            </div> */}
                {/* <br></br> */}
                {/* <br></br>
            <br></br>
            <br></br>
            <br></br> */}
                <Row>
                    <div className="cameraforselfie">
                        <div className={classes.root}>
                            {source &&
                                <Box display="flex" justifyContent="center" className={classes.imgBox}>
                                    <img src={source} alt={"snap"} className={classes.img}></img>
                                </Box>}
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="icon-button-file"
                                type="file"
                                capture="environment"
                                onChange={(e) => handleCapture(e.target)}
                            />

                        </div>
                    </div>
                </Row>
                {/* <br></br> */}
                <Row>
                    <Row span={24}>
                        <Col span={24} offset={2}>
                            <div className="selfieundercamone"> Please center your face record a selfie</div>
                            {/* <div className="selfieundercamtwo">to record a selfie.Make sure the selfie</div>
                        <div className="selfieundercamthree">is bright and clear.</div> */}
                        </Col>
                    </Row>
                </Row>

                <Row span={24}>
                    <div className="footbuttonselfie">


                        {/* 
                    <Col span={21} offset={1}>
                        <div className="buttoninselfie" onClick={ontonext} type="primary" shape="round" size='large'>
                            <p className="selfiebuttonfont">Take Selfie</p>
                        </div>
                    </Col> */}


                        <Row span={24}>

                            <Col span={10} offset={1}>
                                <label className="realbutton" htmlFor="icon-button-file">
                                    <IconButton color="primary" onClick={() => setDisable(true)} aria-label="upload picture" component="span">
                                        <p className="fontcontinueinselfie">Take Selfie</p>
                                    </IconButton>
                                </label>
                                {/* <div className="realbutton" type="primary" shape="round" size='large'>
                                <p className="buttononforscanningfront">Scan Front</p>
                            </div> */}
                            </Col>

                            {
                                isDisabled &&
                                <Col span={10} offset={1}>
                                    <div className="secondbuttonforselfie" onClick={ontonext} type="primary" shape="round" size='large'>
                                        <p className="fontcontinue">Continue</p>
                                    </div>
                                </Col>
                            }
                        </Row>
                    </div>
                </Row>
            </div>
        </Spin>
    );
}