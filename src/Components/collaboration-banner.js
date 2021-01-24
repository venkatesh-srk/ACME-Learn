import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';

const CourseCollaboratorsImages = [{
    title: '',
    image: './images/acme_collaborators_1.png'
}, {
    title: '',
    image: './images/acme_collaborators_2.png'
}, {
    title: '',
    image: './images/acme_collaborators_3.png'
}, {
    title: '',
    image: './images/acme_collaborators_4.png'
}, {
    title: '',
    image: './images/acme_collaborators_5.png'
}]

function    CollaborationBanner () {

    const images = CourseCollaboratorsImages.map((collaborator, key) => {
        return (
            <Col key={key} className="d-inline-block">
                <Image className="col-image" src={collaborator.image} />
            </Col>
        )
    })

    return (
        <Container className='collaboration-banner'>
            <h3 className="heading">We created our courses with collaboration of leading universities and doctors</h3>
            <Row className="list-unstyled">
                {images}
            </Row>
        </Container>
    )
}



export default CollaborationBanner;