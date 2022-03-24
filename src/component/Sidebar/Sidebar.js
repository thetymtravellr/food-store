import React from 'react';
import './Sidebar.css';

const Sidebar = ({ sideMeal }) => {
    return (
        <div className='sidebar'>
            <h2>Food List</h2>
            <ul>
                {
                    sideMeal.map(meal => <li className='side-list'>{meal}</li>)
                }
            </ul>
        </div>
    );
};

export default Sidebar;