import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = ({course}) => {
    const {name} = course
    return (
        <div className='sidebar'>
           <Link>{name}</Link>
        </div>
    );
};

export default Sidebar;