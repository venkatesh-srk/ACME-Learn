import React from "react";
import {Row, Col, Button} from "react-bootstrap";

function NewsLetterBanner () {
    return (
        <div className="news-letter-banner">
            <Row>
                <Col xs={12} sm={6}>
                    <h3 className='news-head'>Get informed about new courses and transform your career.</h3>
                </Col>
                <Col xs={12} sm={6}>
                    <p className="news-text">Sign up to our newsletter and we’ll send fresh new courses and special offers direct to your inbox, once a week.</p>
                    <p className="news-text">You can update your preferences and unsubscribe at any time.</p>
                    <Button variant="primary">Sign me up to the weekly newsletter</Button>
                </Col>
            </Row>
        </div>
    )
}

export default NewsLetterBanner;