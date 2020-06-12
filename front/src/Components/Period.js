import React from 'react';
import Day from './Day';
import { followingDays} from '../utils/functions';

const Period = ({from, to, list}) => {

    const days = followingDays(7, from);

    return (
        <ul className="week">
            {
                days.map( (date, i) => (
                    <li key={`${date.toLocaleString()}`}>
                        <Day 
                            date={date}
                            list={list.filter( el => new Date(el.time).toLocaleDateString() === days[i].toLocaleDateString() )}
                        />
                    </li>)
                )
            }
        </ul>
    )
}

export default Period;