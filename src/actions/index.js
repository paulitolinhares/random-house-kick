export const fetchCategories = () => ({
    type: 'CATEGORY_FETCH_REQUESTED'
});

export const fetchJoke = category => ({
    type: 'JOKE_FETCH_REQUESTED',
    payload: category
});