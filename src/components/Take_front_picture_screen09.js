import React, { useState } from 'react';
import { Col, Row } from 'antd';
import '../styles/Take_a_selfie_screen15.css';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        textAlign: 'center',
    },
    imgBox: {
        maxWidth: "80%",
        maxHeight: "80%",
        margin: "10px"
    },
    img: {
        height: "inherit",
        maxWidth: "inherit",
    },
    input: {
        display: "none"
    }

}));

export default function Takefrontpicture() {
    let history = useHistory();

    function gotonextscreen() {
        history.push('/backpic');
    }
    const classes = useStyles(); const [source, setSource] = useState(""); const handleCapture = (target) => {
        if (target.files) {
            if (target.files.length !== 0) {
                const file = target.files[0];
                const newUrl = URL.createObjectURL(file);
                setSource(newUrl);
            }
        }
    };
    return (
        <div className="frontpicback">
            <div className="frontpicabove">
                <Row>
                    <Col span={2} offset={2}>
                        <LeftOutlined style={{ color: "#F5F9FF" }} />
                    </Col>
                    <Col span={15}>
                        <small className="samlltextback">Back</small>
                    </Col>
                    <Col span={2}>
                        <QuestionCircleOutlined style={{ color: "#F5F9FF", fontWeight: "500px", fontSize: "22px" }} />
                    </Col>
                    <Col span={2}>
                        <MoreOutlined style={{ color: "#F5F9FF", fontWeight: "500px", fontSize: "22px" }} />
                    </Col>
                </Row>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <div className="continerforcamera">
                    <div className={classes.root}>
                        {source &&
                            <Box display="flex" justifyContent="center" border={1} className={classes.imgBox}>
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
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCameraRoundedIcon fontSize="large" color="primary" />
                            </IconButton>
                        </label>
                    </div>
                </div>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <Row span={24}>
                    <Col span={24} offset={2}>
                        <div className="textundercamone"> Please take the picture of the front of the</div>
                        <div className="textundercamtwo">ID card.Make sure it is not blurry or</div>
                        <div className="textundercamthree">dark and is inside the marker.</div>
                    </Col>
                </Row>
            </Row>
            <Row span={24}>
                <div className="footbuttoncamera">
                    <Col span={21} offset={1}>
                        <div className="buttoninthecamerafront" onClick={gotonextscreen} type="primary" shape="round" size='large'>
                            <p className="buttononforscanningfront">Scan Front</p>
                        </div>
                    </Col>
                </div>
            </Row>
        </div>
    );
}