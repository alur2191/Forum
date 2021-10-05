import { toast } from "react-toastify";
import api from '../utils/api'

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types';

// Load User
export const loadUser = () => async dispatch => {
    try {
        const res = await api.get("/auth/");
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Register User
export const register = (name,email,password) => async dispatch => {
    try {
        const res = await api.post("/auth/register", {
            user_name: name,
            user_email: email,
            user_password: password
        });

        if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            toast.success("Register Successfully");
        } else {
            dispatch({
                type: LOGIN_FAIL
            });
            toast.error(res);
        }
        
        
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch('error'));
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }
};

// Login User
export const signIn = (email, password) => async dispatch => {
    try {
        const res = await api.post("/auth/login", {
            user_email: email,
            user_password: password
        })
        if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            toast.success("Logged in Successfully");
        } else {
            dispatch({
                type: LOGIN_FAIL
            });
            toast.error(res);
        }


        
    } catch (err) {
        console.log(err.message);
        
        
        dispatch({
            type: LOGIN_FAIL
        });
    }
};

// Logout
export const logout = () => ({ type: LOGOUT });