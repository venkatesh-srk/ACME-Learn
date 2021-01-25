import React, {useEffect, useState} from "react";
import { Container, Jumbotron, Button, Row, Col, Image } from 'react-bootstrap';

import Header from '../Components/header';
import ChatHelper from "../Components/chat-helper";

import CollaborationBanner from "../Components/collaboration-banner";
import { WrappedSpecialityCards } from "../Components/speciality-card";
import {WrappedCourseCard} from "../Components/course-card";
import NewsLetterBanner from "../Components/news-letter-banner";
import Footer from "../Components/Footer";


function HomePage () {
    const [courses , setCourse] = useState([])

    useEffect(() => {
        fetch('/objects/database.json')
            .then(res => res.json())
            .then(database => {
                const courses = database.Courses;
                setCourse(courses.splice(0, 3))
            })
    }, [])

    return (
        <Container className='home-page' fluid>
            <Row>
                <Col className="p-0">
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col className="p-0">
                    <Jumbotron className='brand-banner' fluid>
                        <Container>
                            <Row>
                                <Col md={7}>
                                    <h1 className="banner-title">Learn medical specialisation <br/> & improve your career.
                                    </h1>
                                    <p className='banner-description'>
                                        Learn new speciality skills with world-class universities and industry experts. Develop your career, learn a new skill, or pursue your hobbies with flexible courses.
                                    </p>
                                    <p>
                                        <Button href="/courses" variant="outline-primary" className="mr-2">Explore Courses</Button>
                                        <Button variant="primary">Join for Free</Button>
                                    </p>
                                </Col>
                                <Col md={{span: 4, offset: 1, order: 'last'}} sm={{order: 'first'}} xs={{order: 'first'}}>
                                    <Image src="./images/banner-doctors@2x.png" width='100%' roundedCircle/>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>

            <Row className='coll-bg'>
                <CollaborationBanner/>
            </Row>

            <Row className="top-spacer">
                <Container>
                    <Row className="bottom-spacer-20">
                        <Col>
                            <h4 className="d-inline-block t-head">Top Specialities</h4>
                            <Button variant="link" className="float-right">Explore all specialities →</Button>
                        </Col>
                    </Row>
                    <WrappedSpecialityCards limit={4} />
                </Container>
            </Row>

            <Row className="top-spacer">
                <Container>
                    <Row>
                        <Col>
                            <h4 className="d-inline-block t-head">Top Courses</h4>
                            <Button variant="link" href='/courses' className="float-right">Explore all courses →</Button>
                        </Col>
                    </Row>
                    <WrappedCourseCard courses={courses} />
                </Container>
            </Row>

            <Row className="top-spacer" style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #DADADA' }}>
                <Container>
                    <NewsLetterBanner  />
                </Container>
            </Row>

            <Row className="footer" >
                <Container>
                    <Footer />
                </Container>
            </Row>

            <ChatHelper/>
        </Container>
    );
}

export default HomePage;