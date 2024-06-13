// src/LifeCalendar.js

import React from 'react';
import { differenceInWeeks } from 'date-fns';
import './LifeCalendar.css';

const LifeCalendar = ({ birthdate }) => {
    const currentDate = new Date();
    const birthDate = new Date(birthdate);
    const totalWeeks = 90 * 52; // Assuming 90 years lifespan
    const livedWeeks = differenceInWeeks(currentDate, birthDate);
    const weeksArray = Array.from({ length: totalWeeks }, (_, index) => index < livedWeeks);

    return (
        <div className="container">
            <h2>Weeks of My Life</h2>
            <div className="calendar">
                {weeksArray.map((lived, index) => (
                    <div key={index} className={`week ${lived ? 'lived' : ''}`}></div>
                ))}
            </div>
        </div>
    );
};

export default LifeCalendar;
