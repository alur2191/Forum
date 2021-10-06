import api from '../utils/api'

import {
    GET_POSTS,
    POST_ERROR,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    EDIT_POST
} from './types';

// Get posts
export const getPosts = () => async dispatch => {
    const res = await api.get("/posts")
    try {
        dispatch({
        type: GET_POSTS,
        payload: res.data.data.posts
        });
    } catch (err) {
        dispatch({
        type: POST_ERROR
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
        type: POST_ERROR
        });
    }
};

// Add post
export const addPost = (title,body,category,author,author_id) => async dispatch => {
    try {
        console.log(title,
            body,
            category,
            author,
            author_id);
        const res = await api.post("/posts/", {
            title,
            body,
            category,
            author,
            author_id
        });
        dispatch({
            type: ADD_POST,
            payload: res.data.data.post
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: POST_ERROR
        });
    }
};

// Get post
export const getPost = id => async dispatch => {
    
    try {
        const res = await api.get(`/posts/${id}`)
        dispatch({
            type: GET_POST,
            payload: res.data.data.posts
        });
    } catch (err) {
        dispatch({
        type: POST_ERROR
        });
    }
};

// Edit post
export const editPost = (data) => async dispatch => {
    try {
        dispatch({
        type: EDIT_POST,
        payload: data
        });
    } catch (err) {
        dispatch({
        type: POST_ERROR
        });
    }
};

