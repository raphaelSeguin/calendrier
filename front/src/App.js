import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEventList, ready} from './actions';
import { fetchCourses } from './utils/fetchers.js';
import Calendar from './Components/Calendar';

import './App.css';

const App = () => {

  // const [state, updateState] = useState({
  //   ready: false,
  //   list: []
  // });

  const dispatch = useDispatch();
  const list = useSelector( state => state.eventList)
  useEffect(  () => {
    fetchCourses()
      .then( res => { console.log(res.data); return res; })
      .then( response => {
        console.log('data fetched :', response.data)
        dispatch( setEventList(response.data))
        dispatch( ready(true) );
      })
      .catch( err => console.log('fetch error : ', err))
  }, []);

  return (
    <div className="App">
      <Calendar title="Cours" eventList={list} />
    </div>
  )
}

export default App;
