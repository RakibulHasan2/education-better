import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData()
    console.log(courseDetails)
    const {name,Difficulty,Duration,classes, details,image,topics} = courseDetails;
    return (
        <div>
            <img src={image} alt="" />
           <h1>{name}</h1>
           <h4>Difficulty :{Difficulty}</h4>
           <h4>Duration :{Duration}</h4>
           <h4>Topics :{topics}</h4>
           <h4>Course OutCome: {details}</h4>
        </div>
    );
};

export default CourseDetails;