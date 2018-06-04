import { call, put, takeLatest } from 'redux-saga/effects';
import { getCategories, getRandomJoke } from '../api';

function* fetchCategories() {
    try {
        const categories = yield call(getCategories);
        yield put({
            type: 'CATEGORY_FETCH_SUCCEEDED',
            payload: categories
        });
    } catch(e) {
        console.error(e);
    }
}

function* fetchJoke(action) {
    try {
        const joke = yield call(getRandomJoke, action.payload);
        yield put({
            type: 'JOKE_FETCH_SUCCEEDED',
            payload: joke.value
        });
    } catch(e) {
        console.error(e);
    }
}

function* saga() {
    yield takeLatest('CATEGORY_FETCH_REQUESTED', fetchCategories);
    yield takeLatest('JOKE_FETCH_REQUESTED', fetchJoke);
}

export default saga;