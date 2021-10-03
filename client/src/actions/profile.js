import api from '../utils/api'

import {
    GET_USER,
    USER_ERROR
} from './types';

// Get current users profile
export const getCurrentUser = () => async (dispatch) => {
    
    try {
        const res = await api.get('/profile/u/me');
        console.log(res.data.rows[0]);
        dispatch({
            type: GET_USER,
            payload: res.data.rows[0]
        });
        
    } catch (err) {
        dispatch({
            type: USER_ERROR
        });
    }
};


// Get user
export const getUser = (username) => async (dispatch) => {
    try {
        const res = await api.get(`/profile/${username}`);
        dispatch({
            type: GET_USER,
            payload: res.data.profile
        });
    } catch (err) {
        dispatch({
            type: USER_ERROR
        });
    }
};
