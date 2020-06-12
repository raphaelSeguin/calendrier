import axios from 'axios';

export const fetchCourses = (minDate, maxDate) => {
    return axios.get('/api/availability/classes', {
        params: {
            minDate,
            maxDate
        }
    });
}