import {
    GET_USER,
    USER_ERROR
} from '../actions/types';

const initialState = {
    profile: {},
    loading: true,
    error: {}
};

function profileReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_USER:
            return {
            ...state,
            profile: payload,
            loading: false
            };
        case USER_ERROR:
            return {
            ...state,
            error: payload,
            loading: false,
            profile: null
            };
        default:
            return state;
    }
}

export default profileReducer;