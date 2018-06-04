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

function* saga() {
    yield takeLatest('CATEGORY_FETCH_REQUESTED', fetchCategories);
}

export default saga;