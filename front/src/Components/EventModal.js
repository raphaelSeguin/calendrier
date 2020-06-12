import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unSelect } from '../actions';
import './EventModal.css';

const EventModal = event => {
  const dispatch = useDispatch();
  const selectedEvent = useSelector( state => state.selectedEvent);
  return (
    <div className="modal"
    >
      <h1>{selectedEvent.name}</h1>
      <p>{selectedEvent.description}</p>
      <div
        className="close"
        onClick={ () => dispatch(unSelect()) }
      >close</div>
    </div>
  )
}

export default EventModal;