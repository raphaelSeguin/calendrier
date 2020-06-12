import { createStore, combineReducers } from 'redux';
import { lastDayDate } from './utils/functions';

const ready = (state = false, action) => {
  const { type, isReady } = action;
  switch (type) {
    case 'READY':
      return isReady;
    default:
      return state;
  }
}

const selectedEvent = (state = null, action) => {
  const { type, event } = action;
  switch (type) {
    case 'SELECT':
      return event;
    case 'UNSELECT':
      return null;
    default:
      return state;
  }
}

const fromDate = ( state = lastDayDate(1, new Date()), action) => {
  const { type, fromDate, weeks } = action;
  switch (type) {
    case 'SET_FROM_DATE':
      return fromDate;
    case 'SHIFT_WEEK':
      return new Date(new Date(state).setDate(new Date(state).getDate() + 7 * weeks))
    default:
      return state;
  }
}

const eventList = ( state = [], action) => {
  const { type, list } = action;
  switch (type) {
    case 'SET_EVENT_LIST':
      return list;
    default: return state;
  }
}

const store = createStore( combineReducers({
    ready,
    selectedEvent,
    fromDate,
    eventList
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;