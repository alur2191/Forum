
import {
    GET_POSTS,
    POST_ERROR,
    DELETE_POST,
    ADD_POST,
    GET_POST
} from './types';

// Get posts
export const getPosts = (data) => async dispatch => {
    try {
        dispatch({
        type: GET_POSTS,
        payload: data
        });
    } catch (err) {
        dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};


// Delete post
export const deletePost = id => async dispatch => {
    try {
        dispatch({
        type: DELETE_POST,
        payload: id
        });

        
    } catch (err) {
        dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Add post
export const addPost = data => async dispatch => {
    try {        
        dispatch({
        type: ADD_POST,
        payload: data
        });

        
    } catch (err) {
        dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Get post
export const getPost = (data) => async dispatch => {
    try {
        dispatch({
        type: GET_POST,
        payload: data
        });
    } catch (err) {
        dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};