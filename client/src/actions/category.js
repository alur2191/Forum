import api from '../utils/api'

import {
    GET_CATEGORIES,
    CATEGORY_ERROR,
    DELETE_CATEGORY,
    ADD_CATEGORY,
    GET_CATEGORY
} from './types';

// Get categories
export const getCategories = () => async dispatch => {
    try {
        const res = await api.get("/category")
        dispatch({
            type: GET_CATEGORIES,
            payload: res.data.data.categories
        });
    } catch (err) {
        dispatch({
            type: CATEGORY_ERROR
        });
    }
};


// Delete category
export const deleteCategory = id => async dispatch => {
    try {
        dispatch({
        type: DELETE_CATEGORY,
        payload: id
        });

        
    } catch (err) {
        dispatch({
        type: CATEGORY_ERROR
        });
    }
};

// Add category
export const addCategory = data => async dispatch => {
    try {        
        dispatch({
        type: ADD_CATEGORY,
        payload: data
        });

        
    } catch (err) {
        dispatch({
        type: CATEGORY_ERROR
        });
    }
};

// Get category
export const getCategory = (data) => async dispatch => {
    try {
        dispatch({
        type: GET_CATEGORY,
        payload: data
        });
    } catch (err) {
        dispatch({
        type: CATEGORY_ERROR
        });
    }
};