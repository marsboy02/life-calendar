import React from 'react';
import { differenceInWeeks } from 'date-fns';
import '../style/LifeCalendar.css';

interface LifeCalendarProps {
    birthdate: string;
}

const LifeCalendar: React.FC<LifeCalendarProps> = ({ birthdate }) => {
    const currentDate = new Date();
    const birthDate = new Date(birthdate);
    const totalWeeks = 90 * 52;
    const livedWeeks = differenceInWeeks(currentDate, birthDate);
    const weeksArray = Array.from({ length: totalWeeks }, (_, index) => index < livedWeeks);

    return (
        <div className="container">
            <h2>A 90 Year Human Life in Weeks</h2>
            <div className="calendar">
                {weeksArray.map((lived, index) => (
                    <div key={index} className={`week ${lived ? 'lived' : ''}`}></div>
                ))}
            </div>
        </div>
    );
};

export default LifeCalendar;
