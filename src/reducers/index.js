const initialState = {
    categories: []
};

const reducer = (state = initialState, action) => {
    console.log({state, action});
    switch(action.type) {
        case 'CATEGORY_FETCH_SUCCEEDED':
            return {
                ...state,
                categories: action.payload
            };
        case 'JOKE_FETCH_SUCCEEDED':
            return {
                ...state,
                joke: action.payload
            };
        default: 
            return state;
    }
}

export default reducer;