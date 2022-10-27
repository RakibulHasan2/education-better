import React from 'react';
import './Home.css'
import heading1 from '../../Images/heading-1.png'
import heading2 from '../../Images/heading1.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='get-started d-flex  justify-content-center align-items-center'>
           <div className='heading1'>
            <img src={heading2} alt="" />
           </div>
           <div className='heading-info'>
            <h1>Hello Dear, <span className='text-primary fw-bold'>Students</span></h1>
             <p>Welcome to Our Institution. Here You can find the course that is suitable for your future job sector. We encourage students to do our courses because we teach in a unique way.</p>
             <p>So hurry up!! our registration deadline means deadline.</p>
             <Link to= '/courses'>
             <Button className='btn-lg'>Get Started</Button>
             </Link>
           </div>
           <div className='heading2'>
            <img src={heading1} alt="" />
           </div>
        </div>
    );
};

export default Home;