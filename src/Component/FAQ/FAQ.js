import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './FAQ.css'
const FAQ = () => {
    return (
        <Accordion defaultActiveKey="0" className='mt-5 container text-start mb-5'>
            <h1 className='text-center mb-5 text-success fw-bold'>Frequently Asked Questions</h1>
        <Accordion.Item eventKey="0">s
          <Accordion.Header ><span className='fs-3 fw-bold text-primary'>This Course is For Whom?</span></Accordion.Header>
          <Accordion.Body className='fs-5 fw-bold'>
           Whoever wants to be web developer the course is for them. Another thing is who has interest in the computer science , he or she can do this courses because it will help him/her for their future job sector.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><span className='fs-3 fw-bold text-primary'>How long the courses are?</span></Accordion.Header>
          <Accordion.Body className='fs-5 fw-bold'>
            Actually, we can't say exactly the time duration of course. Because, it varies courses to courses. Like, in some courses maybe in 30 weeks it can be finished or in another course it may take 100 weeks. It depends on the content of the course.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><span className='fs-3 fw-bold text-primary'>What is educational background needed for this?</span></Accordion.Header>
          <Accordion.Body className='fs-5 fw-bold'>
            Yes, a student needs to be at least HSC pass to do this courses. Because its intermediate level courses that's why everyone can't understand this course or can't handle the course content.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header><span className='fs-3 fw-bold text-primary'>Why the courses are not free?</span></Accordion.Header>
          <Accordion.Body className='fs-5 fw-bold'>
           In our courses there are so many instructor that we already hired. And we need to pay them for their work. And if we don't take money form students how will we able to pay the instructor. We have also our co-workers who are working really hard so that no one face any problems. So, we have to keep all that thing in our mind and take atleast course fee from student.
          </Accordion.Body>
        </Accordion.Item>
         <Accordion.Item eventKey="4">
          <Accordion.Header><span className='fs-3 fw-bold text-primary'>Are the coruses content final?</span></Accordion.Header>
          <Accordion.Body className='fs-5 fw-bold'>
            No, actually it depend on situation. We update our content according to our batch students understanding. We are flexible enough in that.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header><span className='fs-3 fw-bold text-primary'>If you have any other queries then how will you contact us?</span></Accordion.Header>
          <Accordion.Body className='fs-5 fw-bold'>
            We have our facebook page, facebook groups , website support system. Anyone can send message to us that message will directly come to us. And we give feedback to the messages.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
};

export default FAQ;