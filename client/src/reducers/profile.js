import {
    GET_PROFILE,
    PROFILE_ERROR
} from '../actions/types';

const initialState = {
    profile: {},
    loading: true,
    error: {}
};

function profileReducer(state = initialState, action) {
    const { type, payload } = action;
    console.log(payload);
    switch (type) {
        case GET_PROFILE:
            return {
            ...state,
            profile: payload,
            loading: false
            };
        case PROFILE_ERROR:
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