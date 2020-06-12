import React from 'react';
import { lastDayDate, nextDayDate } from './utils/functions.js';

export const initialState = {
    title: '',
    ready: false,
    list: [],
    today: new Date(),
    from: lastDayDate(1), // monday
    to: nextDayDate(0) // sunday
}

export const Context = React.createContext(initialState);