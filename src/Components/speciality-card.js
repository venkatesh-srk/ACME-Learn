import React from "react";
import {Row, Col, Card, Container} from "react-bootstrap";


const specialities = [{
    title: 'Neurology',
    image: './images/icon-brain.svg'
}, {
    title: 'Cardiolody',
    image: './images/icon-medical_heart.svg'
}, {
    title: 'Respiratory',
    image: './images/icon-lungs.svg'
}, {
    title: 'Gastroenterology',
    image: './images/icon-stomach.svg'
}];

function SpecialityCard (props) {
    const speciality = props.speciality;
    return (
        <Card className="speciality-card">
            <Card.Img className="card-img" src={ speciality.image } />
            <Card.Body>
                <Card.Title className="card-title">{speciality.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

function WrappedSpecialityCards (props) {
    const limit = props.limit || 3;

    const cards = specialities.map((speciality, key) => {
        if(key < limit) {
            return (
                <Col xs={12} sm={3} key={key}>
                    <SpecialityCard speciality={ speciality } key={key}/>
                </Col>
            )
        }
    })
    return (
        <Row className="speciality-cards">
            {cards}
        </Row>
    )
}

export { SpecialityCard as default, WrappedSpecialityCards };