import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
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