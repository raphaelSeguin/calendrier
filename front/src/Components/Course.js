import React from 'react';
import { useDispatch } from 'react-redux';
import { selectEvent } from '../actions'; 
import './Course.css';
import { dateToTimeString } from '../utils/functions';
// import { Context } from '../state.js';

const Course = ({
    course = {},
}) => {
    const dispatch = useDispatch();
    const { name, time } = course;
    return (
        <div className="course"
            onClick={ () => dispatch(selectEvent(course)) }
        >
            <p className="title">{name.replace(/\s.+/g, "")}</p>
            <p className="time">{dateToTimeString(time)}</p>
        </div>
    )
}

export default Course;