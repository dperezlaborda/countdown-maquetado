import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../assets/css/countdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Countdown = () => {
    return (
        <section className="intro">
            <Container>
                <Row className="text-center">
                    <Col sm={12} md={12} lg={12}>
                        <div className="intro-text">
                            <h2 className="title">Black Friday</h2>
                            <p className="sub">Our exciting new website is coming soon! Check back later...</p>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={12}>
                        <Row className="container-coutdown mt-3">
                            <div className="clock">
                                <div className="days clock-box">
                                    <span>0</span>
                                    <span>Days</span>
                                </div>
                                <div className="hours clock-box">
                                    <span>00</span>
                                    <span>Hours</span>
                                </div>
                                <div className="minutes clock-box">
                                    <span>00</span>
                                    <span>Minutes</span>
                                </div>
                                <div className="seconds clock-box">
                                    <span>00</span>
                                    <span>Seconds</span>
                                </div>
                            </div>
                        </Row>
                        <div className="mt-4">
                            <Button className="text-uppercase btn-color">Contact Us</Button>
                            <Button className="text-uppercase btn-border">About Us</Button>
                        </div>
                        <div className="social-media d-flex flex-direction-row mt-5">
                            <div className="mx-3">
                                <FontAwesomeIcon className="icon" icon={faFacebookF} />
                            </div>
                            <div className="mx-3">
                                <FontAwesomeIcon className="icon" icon={faTwitter} />
                            </div>
                            <div className="mx-3">
                                <FontAwesomeIcon className="icon" icon={faInstagram} />
                            </div>
                            <div className="mx-3">
                                <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Countdown;