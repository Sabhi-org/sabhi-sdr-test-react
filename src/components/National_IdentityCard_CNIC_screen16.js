
// importing react and its components----->
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { sabhiApiInstance, apiInstance } from '../axios-instance';
// importing antd components------------->
import { Form, Input, Button, Col, Row, Image, Avatar, Spin, Space } from 'antd';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';

// importing css style files----------------------------------->
import '../styles/National_IdentityCard_CNIC_screen16.css';

export default function Nationalidentitycard() {

    const did = localStorage.getItem('DID');
    let history = useHistory();
    const [form] = Form.useForm();
    const [isLoading, setIsloading] = useState('false');
    const [images, setImages] = useState({});

    const getOcrRecord = async () => {
        try {
            setIsloading(true);
            const response = await sabhiApiInstance.get(`ocr/${did}`);
            const { identityCardFrontData, identityCardBackData, profileImage, identityCardFrontImage, identityCardBackImage } = response.data.data[0];
            setImages({ profileImage: profileImage, identityCardFrontImage: identityCardFrontImage, identityCardBackImage: identityCardBackImage });
            form.setFieldsValue({
                fullName: identityCardFrontData.nameEnglish,
                fatherName: identityCardFrontData.fatherNameEnglish,
                gender: identityCardFrontData.gender,
                countryOfStay: identityCardFrontData.countryOfStay,
                identityNumber: identityCardFrontData.identityNumber,
                issueDate: identityCardFrontData.dateOfIssue,
                birthDate: identityCardFrontData.dateOfBirth,
                expireDate: identityCardFrontData.dateOfExpiry,
                permanentAddress: identityCardBackData.permenantAddress,
                temporaryAddress: identityCardBackData.presentAddress,
            });
            setIsloading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getOcrRecord();
    }, []);


    const createVerifiablePresentation = async (values) => {
        try {
            const response = await apiInstance.post('vp', values);
        } catch (error) {
            console.error(error);
        }
    }

    const onFinish = (values) => {
        console.log(values);
        setIsloading(true);
        values.profileImage = images.profileImage;
        values.did = did;
        values.identityCardBackImage = images.identityCardBackImage;
        values.identityCardFrontImage = images.identityCardFrontImage;
        createVerifiablePresentation(values);
        setIsloading(false);
        history.push({
            pathname: '/user_profile',
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    function goUserScreen() {
        history.push('/welcome');
    }


    return (
        <div className="cnicscreen">
            <div className="containsnic">
                <Row>
                    <Col span={2}>
                        <LeftOutlined style={{ color: "#95A7C6" }} />
                    </Col>
                    <Col span={18}>
                        <small className="cnicback">Back</small>
                    </Col>
                    <Col span={2}>
                        <QuestionCircleOutlined style={{ color: "#95A7C6", fontWeight: "500px", fontSize: "22px" }} />
                    </Col>
                    <Col span={2}>
                        <MoreOutlined style={{ color: "#95A7C6", fontWeight: "500px", fontSize: "22px" }} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="cnicscreentitle">
                            <p className="nicscreentitle">National</p>
                        </div>
                        <div className="personaltitlw2">
                            <p className="nationalfont">Identity Card (CNIC)</p>
                        </div>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={15}>
                        <div className="cnicinbar"></div>
                    </Col>
                    <Col span={9}>
                        <div className="cnibarscreenbar"></div>
                    </Col>
                </Row>
                <Row>
                    <div className="nicdescription">
                        <p className="cnicnationaltextpara">Here are the details we scanned from</p>
                        <p className="cnicnationaltextpara">your ID document.You can also</p>
                        <p className="cnicnationaltextpara">preview the scanned document.</p>
                    </div>
                </Row>



                <Form
                    layout="horizontal"
                    form={form}
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>


                    <Row>
                        <Col span={18}>
                            <small className="tinytextinnicscreen">Full Name</small>
                        </Col>
                    </Row>
                    <Row span={24}>
                        <Col span={24}>
                            <input className="inputsinpersocnicscreens"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={18}>
                            <small className="tinytextinpersonalscreen">Last Name</small>
                        </Col>
                    </Row>
                    <Row span={24}>
                        <Col span={24}>
                            <input className="inputsinpersonalscreen"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={18}>
                            <small className="tinytextinpersonalscreen">Street Address</small>
                        </Col>
                    </Row>
                    <Row span={24}>
                        <Col span={24}>
                            <input className="inputsinpersonalscreen"></input>
                        </Col>
                    </Row>
                    <Row span={24}>
                        <Col span={12}>
                            <Row>
                                <Col span={18}>
                                    <small className="tinytextinpersonalscreen">City</small>
                                </Col>
                            </Row>
                            <Row span={24}>
                                <Col span={24}>
                                    <input className="inputsincnicscreengender"></input>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={18}>
                                    <small className="tinytextinpersonalscreen">Postal Code</small>
                                </Col>
                            </Row>
                            <Row span={24}>
                                <Col span={24}>
                                    <input className="inputsincnicscreenstay"></input>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={18}>
                            <small className="tinytextinpersonalscreen">Country of Residence</small>
                        </Col>
                    </Row>
                    <Row span={24}>
                        <Col span={24}>
                            <input className="inputsinpersonalscreen"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={18}>
                            <small className="tinytextinpersonalscreen">CNIC number</small>
                        </Col>
                    </Row>
                    <Row span={24}>
                        <Col span={24}>
                            <input className="inputsinpersonalscreen"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={18}>
                            <small className="tinytextinpersonalscreen">Date of Birth</small>
                        </Col>
                    </Row>
                    <Row span={24}>
                        <Col span={24}>
                            <input className="inputsinpersonaldate"></input>
                        </Col>
                    </Row>
                    <Row span={24}>
                        <Col span={12}>
                            <Row>
                                <Col span={18}>
                                    <small className="tinytextinpersonalscreen">Issue Date</small>
                                </Col>
                            </Row>
                            <Row span={24}>
                                <Col span={24}>
                                    <input className="inputsinpersonalissue"></input>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={18}>
                                    <small className="tinytextinpersonalscreen">Expiry Date</small>
                                </Col>
                            </Row>
                            <Row span={24}>
                                <Col span={24}>
                                    <input className="inputsinpersonalscreen"></input>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Form>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row span={24}>
                    <div className="nicscreenstick">
                        <Row span={24}>
                            <Col span={9} offset={1}>
                                <div className="buttonincnicscreen" type="primary" shape="round" size='large'>
                                    <p className="continuecnicscreen">Preview</p>
                                </div>
                            </Col>
                            <Col span={9} offset={1}>
                                <div className="buttonincnicscreen2" onClick={goUserScreen} shape="round" size='large'>
                                    <p className="continuecnicscreen2">Done</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </div>
        </div>
    );
}