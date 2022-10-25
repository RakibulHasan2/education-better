import React from 'react';
import './Course.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Course = ({course}) => {
    const {name,Duration,classes,image} = course;
    return (
        <div className='body'>
    <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={image} />
        <Card.Body>
             <Card.Title>{name}</Card.Title>
             <h4>hello</h4>
            <Button variant="primary">More Details</Button>
        </Card.Body>
    </Card>
        </div>
    );
};

export default Course;