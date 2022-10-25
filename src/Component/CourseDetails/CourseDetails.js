import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css'
const CourseDetails = () => {
    const courseDetails = useLoaderData()
    console.log(courseDetails)
    const {name,Difficulty,Duration,classes, details,image,topics} = courseDetails;
    return (
        <div className='d-flex container details-container'>
           <div className='details-body'>
           <h1 className='text-center text-primary fw-bold'>{name}</h1>
           <p><span className='fw-bold'>Difficulty</span> :{Difficulty}</p>
           <p><span className='fw-bold'>Duration</span> :{Duration}</p>
           <p> <span className='fw-bold'>Classes </span> :{classes}</p>
           <p><span className='fw-bold'>Topics</span> :{topics}</p>
           <p><span className='fw-bold'>Course OutCome</span>: {details}</p>
           </div>
           <img src={image} alt="" />
        </div>
    );
};

export default CourseDetails;