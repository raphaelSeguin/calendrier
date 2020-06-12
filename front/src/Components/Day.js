import React from 'react';
import Course from './Course';
import { select, selectEvent } from '../actions';
import './Day.css'

const days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

const Day = ({ 
    date = Date(),
    list = []
}) => {
    const dayDisplay = days[ new Date(date).getDay() ];
    const dateDisplay = new Date(date).getDate();
    
    return (
        <div className="day">
            <p>{dayDisplay}</p>
            <p>{dateDisplay}</p>

            <ul>
                {
                    list.map( (course, i) => (
                        <Course
                            course={course}
                            key={i}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

Day.protoTypes = {
    name: React.prototype
}

export default Day;