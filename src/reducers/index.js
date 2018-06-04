const initialState = {
    categories: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CATEGORY_FETCH_SUCCEEDED':
            return {
                ...state,
                categories: action.payload
            };
        default: 
            return state;
    }
    return state;
}

export default reducer;