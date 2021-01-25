import React, {useEffect, useState} from "react";
import {Container, Row, Col, Image, Button} from "react-bootstrap";
import Header from "../Components/header";

import './courses-page.sass';
import {WrappedCourseCard} from "../Components/course-card";
import NewsLetterBanner from "../Components/news-letter-banner";
import Footer from "../Components/Footer";
import ChatHelper from "../Components/chat-helper";



function CoursesPage() {
    const [courses , setCourse] = useState([])

    useEffect(() => {
        document.title = 'ACME Learn - Course'
    })

    useEffect(() => {
        fetch('/objects/database.json')
            .then(res => res.json())
            .then(database => {
                const courses = database.Courses;
                setCourse(courses)
            })
    }, [])

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="p-0">
                        <Header />
                    </Col>
                </Row>
            </Container>

            <Container className="course-head">
                <Row>
                    <Col sm={1}>
                        <Image src="/images/icon-rocket.svg"/>
                    </Col>
                    <Col xs={12} sm={11}>
                        <h5 className="title">Take a course and up-skill yourself</h5>
                        <p className="description">Choose from hundreds of courses from top universities and specialist organisations.</p>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="course-filter-bx bottom-spacer-20">
                <Row>
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <span className="mr-4">Filter course by</span>
                                    <Button variant="outline-secondary" className="mr-2">Specialities</Button>
                                    <Button variant="outline-secondary" className="mr-2">Course Duration</Button>
                                    <Button variant="outline-secondary" className="mr-2">Expert Level</Button>
                                    <Button variant="outline-secondary" className="mr-2">Days of the week</Button>
                                </div>
                                <br/>
                                <h6>Showing all 142 courses</h6>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Container>
                        <Row>
                            <Col>
                                <h4 className="d-inline-block t-head">Courses</h4>
                            </Col>
                        </Row>
                        <WrappedCourseCard courses={courses}/>
                    </Container>
                </Row>
            </Container>

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
        </>
    )
}

export default CoursesPage