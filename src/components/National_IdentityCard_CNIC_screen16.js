
// importing react and its components----->
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { sabhiApiInstance } from '../axios-instance';
// importing antd components------------->
import { Form, Button, Col, Row, Image, Avatar, Spin, Space, message } from 'antd';
import { LeftOutlined, QuestionCircleOutlined, MoreOutlined } from '@ant-design/icons';

// importing css style files----------------------------------->
import '../styles/National_IdentityCard_CNIC_screen16.css';

export default function Nationalidentitycard() {

    const did = localStorage.getItem('DID');
    let history = useHistory();
    const [form] = Form.useForm();
    const [isLoading, setIsloading] = useState('false');
    const [images, setImages] = useState({});
    const [identityCardFrontData, setIdentityCardFrontData] = useState({});


    const getOcrRecord = async () => {
        try {
            setIsloading(true);
            const response = await sabhiApiInstance.get(`ocr/${did}`);
            const { identityCardFrontData, profileImage, identityCardFrontImage } = response.data.data[0];
            setIdentityCardFrontData(identityCardFrontData);
            setImages({ profileImage: profileImage, identityCardFrontImage: identityCardFrontImage, });
            form.setFieldsValue({
                fullName: identityCardFrontData.nameEnglish,
                fatherName: identityCardFrontData.fatherNameEnglish,
                gender: identityCardFrontData.gender,
                countryOfStay: identityCardFrontData.countryOfStay,
                identityNumber: identityCardFrontData.identityNumber,
                issueDate: identityCardFrontData.dateOfIssue,
                birthDate: identityCardFrontData.dateOfBirth,
                expireDate: identityCardFrontData.dateOfExpiry,
            });
            setIsloading(false);
        } catch (error) {
            message.error(error.message);
        }
    }

    useEffect(() => {
        getOcrRecord();
    }, []);


    const onFinish = async (values) => {
        try {
            setIsloading(true);
            values.profileImage = images.profileImage;
            values.did = did;
            values.identityCardFrontImage = images.identityCardFrontImage;
            console.log(values);
            const response = await sabhiApiInstance.post('vp', values);
            if (response.data.status) {
                setIsloading(false);
                history.push('/welcome');
            } else message.error('something went wrong, please try again!');
        } catch (error) {
            message.error('something went wrong, please try again!');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Spin spinning={isLoading} tip="retrieving records...">
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
                        onFinishFailed={onFinishFailed}
                        name="basic">
                        <Row>
                            <Col span={18}>
                                <small className="tinytextinnicscreen">Full Name</small>
                            </Col>
                        </Row>
                        <Row span={24}>
                            <Col span={24}>
                                <Form.Item name="fullName">
                                    <input className="inputsinpersocnicscreens" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={18}>
                                <small className="tinytextinpersonalscreen">Father Name</small>
                            </Col>
                        </Row>
                        <Row span={24}>
                            <Col span={24}>
                                <Form.Item name="fatherName">
                                    <input className="inputsinpersonalscreen" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row span={24}>
                            <Col span={12}>
                                <Row>
                                    <Col span={18}>
                                        <small className="tinytextinpersonalscreen">Gender</small>
                                    </Col>
                                </Row>
                                <Row span={24}>
                                    <Col span={24}>
                                        <Form.Item name="gender">
                                            <input className="inputsincnicscreengender" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row>
                                    <Col span={18}>
                                        <small className="tinytextinpersonalscreen">Country Of Stay</small>
                                    </Col>
                                </Row>
                                <Row span={24}>
                                    <Col span={24}>
                                        <Form.Item name="countryOfStay">
                                            <input className="inputsincnicscreenstay" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={18}>
                                <small className="tinytextinpersonalscreen">Identity Number</small>
                            </Col>
                        </Row>
                        <Row span={24}>
                            <Col span={24}>
                                <Form.Item name="identityNumber">
                                    <input className="inputsinpersonalscreen" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={18}>
                                <small className="tinytextinpersonalscreen">Date Of Issue</small>
                            </Col>
                        </Row>
                        <Row span={24}>
                            <Col span={24}>
                                <Form.Item name="issueDate">
                                    <input className="inputsinpersonalscreen" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={18}>
                                <small className="tinytextinpersonalscreen">Date of Birth</small>
                            </Col>
                        </Row>
                        <Row span={24}>
                            <Col span={24}>
                                <Form.Item name="birthDate">
                                    <input className="inputsinpersonaldate" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row span={24}>
                            <Col span={12}>
                                <Row>
                                    <Col span={18}>
                                        <small className="tinytextinpersonalscreen">Date Of Expiry</small>
                                    </Col>
                                </Row>
                                <Row span={24}>
                                    <Col span={24}>
                                        <Form.Item name="expireDate">
                                            <input className="inputsinpersonalissue" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
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
                                        <Button className="buttonincnicscreen2" style={{ backgroundColor: '#4DDFBC', color: 'white', height: '50px', borderRadius: '10px', fontWeight: '500', fontSize: '15px' }}>Preview</Button>
                                    </Col>
                                    <Col span={9} offset={1}>
                                        {/* <div className="buttonincnicscreen2" shape="round" size='large'>
                                            <p className="continuecnicscreen2">Done</p>

                                        </div> */}
                                        <Button className="buttonincnicscreen2" htmlType="submit" style={{ backgroundColor: '#4DDFBC', color: 'white', height: '50px', borderRadius: '10px', fontWeight: '500', fontSize: '15px' }}>Done</Button>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </Form>
                </div>
            </div>
        </Spin>
    );
}