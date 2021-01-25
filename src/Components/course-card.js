import React from "react";
import {Card, Row, Col, Button, Image } from "react-bootstrap";

import './course-card.sass'

import { SVGStar } from './utilities';



function CourseRatingAndReviews (props) {
    const { rating , reviews } = props.course;
    let starsArr = [1,2,3,4,5];
    const StarsIcons = starsArr.map(key => {
        return <SVGStar key={key} isActive={(rating >= key)}/>
    });

    return (
        <p className="starRating">
            {StarsIcons}
            <span className="ml-2"><b>{rating}</b></span>
            <span className="ml-2">({reviews} Reviews)</span>
        </p>
    )

}

function CourseCard (props) {
    const course = props.course;

    const courseTag = Course => {
        return (
            <div className={'course-tag tag-'+ Course.tag.category}>
                <p className="m-0">{Course.tag.title}</p>
            </div>
        )
    }

    return (
        <Card className="course-card">
            <Card.Body>
                {course.tag ? courseTag(course) : ''}
                <Card.Img className="card-image" src={course.image} />
                <Card.Subtitle className="mb-2 text-muted">{course.subTitle}</Card.Subtitle>
                <Card.Title>{course.title}</Card.Title>
                <CourseRatingAndReviews course={course} />
                <Row>
                    <Col className='course-detail-div' md={7}>
                        <p className="course-duration-head">
                            <Image src="./images/icon-calender.svg" height="12px" />Course Starting on,</p>
                        <p className="course-duration-text">{ course.startDate }</p>
                    </Col>
                    <Col className='course-detail-div' md={5}>
                        <p className="course-duration-head">
                            <Image src="./images/icon-calender.svg" height="12px" />Enrolled Users</p>
                        <p className="course-duration-text">{course.enrolledUsers}</p>
                    </Col>
                </Row>
                <Button variant="outline-primary" className="mt-4" href={'/courses/' + course.id} block>View course details</Button>
            </Card.Body>
        </Card>
    )
}

function WrappedCourseCard (props) {
    const courses = props.courses;

    const cards = courses.map((course, key) => {
        return (
            <Col sm={12} md={6} lg={4} key={key}>
                <CourseCard key={key} course={course} />
            </Col>
        )
    })

    return (
        <Row className="course-cards">
            {cards}
        </Row>
    )
}

export {CourseCard as default, WrappedCourseCard };