const initialState = {
  categories: [],
  joke: null,
  jokeStatus: 'waiting', // can be ['waiting', 'loading', 'loaded', 'done', 'failed']
  categoriesStatus: 'waiting' // can be ['waiting', 'loaded', 'failed']
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CATEGORY_FETCH_SUCCEEDED':
      return {
        ...state,
        categories: action.payload,
        categoriesStatus: 'loaded'
      };
    case 'CATEGORY_FETCH_FAILED':
      return {
        ...state,
        categories: [],
        categoriesStatus: 'failed'
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
    case 'JOKE_FETCH_FAILED':
      return {
        ...state,
        jokeStatus: 'failed',
      }
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
