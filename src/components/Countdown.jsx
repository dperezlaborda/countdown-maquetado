import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/coutdown.css';

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
                    <Col sm={12} md={12} lg={8}>
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
                        <div className="contact"></div>
                        <div className="about"></div>
                        <div className="social-media">
                            <div className="facebook"></div>
                            <div className="twitter"></div>
                            <div className="instagram"></div>
                            <div className="googlePlus"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Countdown;