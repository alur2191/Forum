const initialState = {
    categories: [],
    category: null,
    loading: true,
    error: {}
};


const categoryReducer = (state=initialState,action) => {
    const { type, payload } = action;

    switch (type) {
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: payload,
                loading: false
            };
        case 'GET_CATEGORY':
            return {
                ...state,
                category: payload,
                loading: false
            };
        case 'ADD_CATEGORY':
            return {
                ...state,
                categories: [payload, ...state.categories],
                loading: false
            };
        case 'DELETE_CATEGORY':
            return {
                ...state,
                categories: state.categories.filter((category) => category._id !== payload),
                loading: false
            };
        case 'CATEGORY_ERROR':
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}

export default categoryReducer;