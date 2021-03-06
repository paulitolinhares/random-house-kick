import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getCategories, getRandomJoke } from 'api';
import { delay } from 'lib';

function* fetchCategories() {
  try {
    const categories = yield call(getCategories);
    yield put({
      type: 'CATEGORY_FETCH_SUCCEEDED',
      payload: categories,
    });
  } catch (e) {
    console.error(e.message);
    yield put({type: 'CATEGORY_FETCH_FAILED'});
  }
}

function* fetchJoke(action) {
  try {
    const joke = yield call(getRandomJoke, action.payload);
    yield all([
      delay(1000), // Erase this line to remove the delay on the joke loading
      put({
        type: 'JOKE_FETCH_SUCCEEDED',
        payload: joke.value,
      })
    ]);
  } catch (e) {
    console.error(e.message);
    yield put({type: 'JOKE_FETCH_FAILED'});
  }
}

function* saga() {
  yield takeLatest('CATEGORY_FETCH_REQUESTED', fetchCategories);
  yield takeLatest('JOKE_FETCH_REQUESTED', fetchJoke);
}

export default saga;
