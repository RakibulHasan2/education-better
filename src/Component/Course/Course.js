import React from 'react';
import './Course.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  FaUniversity,FaCalendarTimes, FaArrowAltCircleRight} from 'react-icons/fa';
const Course = ({course}) => {
    const {name,Duration,classes,image} = course;
    return (
        <div className='body'>
     <Card >
             <Card.Img variant="top" src={image} />
        <Card.Body>
             <Card.Title>{name}</Card.Title>
            <div className='d-flex'>
            <p>< FaUniversity/> <span className='fw-bold'>Classes :</span> {classes}</p>
            <p className='ps-4'> <span className='fw-bold'>Duration</span> : {Duration} <FaCalendarTimes/></p>
            </div>
            <Button variant="primary" className='me-3'>More Details <FaArrowAltCircleRight/></Button>
        </Card.Body>
    </Card>
        </div>
    );
};

export default Course;