import React from "react";
import {Card, Container, Row, Col, Button, Image } from "react-bootstrap";

import { SVGStar } from './utilities';

const Courses = [{
    title: "Neuroscience and Neuroimaging",
    subTitle: "Harvard Medical School",
    image: './images/acme_courses_1.png',
    rating: 4.8,
    reviews: 4878,
    tag: {
        title: 'Most Expected',
        category: 1
    },
    startDate: '01/01/2021',
    enrolledUsers: 358,
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
}, {
    title: "Advance Neurology",
    subTitle: "Stanford University of California",
    image: './images/acme_courses_2.png',
    rating: 4.6,
    reviews: 3578,
    tag: {
        title: 'Trending',
        category: 1
    },
    startDate: '06/01/2021',
    enrolledUsers: 287,
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
}, {
    title: "Respiratory Therapy",
    subTitle: "Harvard Medical School",
    image: './images/acme_courses_3.png',
    rating: 4.4,
    reviews: 3654,
    tag: {
        title: 'Popular',
        category: 2
    },
    startDate: '12/01/2021',
    enrolledUsers: 234,
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
}]


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

    const featuredTag = (
        <div>
            <p>Featured</p>
        </div>
    )

    return (
        <Card className="course-card">
            <Card.Body>
                <Card.Img className="card-image" src={course.image} />
                <Card.Subtitle className="mb-2 text-muted">{course.subTitle}</Card.Subtitle>
                <Card.Title>{course.title}</Card.Title>
                <CourseRatingAndReviews course={course} />
                <div className='course-detail-div'>
                    <p className="course-duration-head">
                        <Image src="./images/icon-calender.svg" height="12px" />Course Starting on,</p>
                    <p className="course-duration-text">{course.startDate}</p>
                </div>
                <div className='course-detail-div'>
                    <p className="course-duration-head">
                        <Image src="./images/icon-calender.svg" height="12px" />Enrolled Users</p>
                    <p className="course-duration-text">{course.enrolledUsers}</p>
                </div>
                <Button variant="outline-primary" block>View course details</Button>
            </Card.Body>
        </Card>
    )
}

function WrappedCourseCard (props) {
    const limit = props.limit || 3;

    const cards = Courses.map((course, key) => {
        if(key < limit) {
            return (
                <Col xs={12} sm={4} key={key}>
                    <CourseCard key={key} course={course}/>
                </Col>
            )
        }
    })

    return (
        <Row className="course-cards">
            {cards}
        </Row>
    )
}

export {CourseCard as default, WrappedCourseCard };