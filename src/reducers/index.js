const initialState = {
  categories: [],
  joke: null,
  jokeStatus: 'waiting', // can be ['waiting', 'loading', 'loaded', 'done']
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CATEGORY_FETCH_SUCCEEDED':
      return {
        ...state,
        categories: action.payload,
      };
    case 'JOKE_FETCH_REQUESTED':
      return {
        ...state,
        jokeStatus: 'loading',
      };
    case 'JOKE_FETCH_SUCCEEDED':
      return {
        ...state,
        joke: action.payload,
        jokeStatus: 'loaded',
      };
    case 'JOKE_DONE':
      return {
        ...state,
        jokeStatus: 'done',
      };
    default:
      return state;
  }
};

export default reducer;
