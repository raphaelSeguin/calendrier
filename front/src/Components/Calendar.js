import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { shiftWeek } from '../actions';
import Period from './Period';
import EventModal from './EventModal'
import './Calendar.css';
import { nextDayDate } from '../utils/functions';

const Calendar = ({title}) => {

    const from = useSelector( state => state.fromDate );
    const ready = useSelector( state => state.ready );
    const list = useSelector( state => state.eventList);
    const selectedEvent = useSelector( state => state.selectedEvent);

    const dispatch = useDispatch();

    const to = nextDayDate(from.getDay(), from);

    return (
        <div className="Calendrier">
            <h1>{title}</h1>
            <div>
                <button className="btn" onClick={ () => dispatch(shiftWeek(-1)) }>&lt;</button> 
                <button className="btn" onClick={ () => dispatch(shiftWeek(+1)) }>&gt;</button>
            </div>
            
            <span>du {from.toLocaleDateString()}</span>
            <span>au {to.toLocaleDateString()}</span>
            {
                ! ready && 
                <p>waiting for data...</p>
            }
            {
                ready &&
                <Period {...{from, to, list}} />
            }
            {
                selectedEvent && <EventModal />
            }
            
        </div>
    )
}

export default Calendar;






    // const dateMap = list.reduce( (map, el) => {
    //     const dateHash = dateToString(el.time);
    //     if (dateHash in map) {
    //         map[dateHash].push(el);
    //     } else {
    //         map[dateHash] = [el];
    //     }
    //     return map
    // }, {});

    // console.log(dateMap);

    // const periodProps = {
    //     from: state.from,
    //     to: state.to,
    //     dateMap: Object.entries(dateMap).filter( ([key, val]) => {
    //         return new Date(key) >= state.from && new Date(key <= state.to)
    //     }).reduce( (obj, arr) => {
    //         obj[arr[0]] = arr[1];
    //         return obj;
    //     }, {})
    // }
    // console.log(periodProps.dateMap)
