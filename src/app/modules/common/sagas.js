import { takeLatest/* , call, put */ } from 'redux-saga/effects';

const setContextSaga = () => {

    // Sample Use
    /* 
    try {
        const response = yield call(getCountries, payload);
        yield put(fetchCountriesSuccess(countriesMapper(response.data.Data)));
    } catch (error) {
        yield put(fetchCountriesFail(error));
    } 
    */

    console.log('set context !');
}

function* commonSaga() {
  yield takeLatest('common/setContext', setContextSaga);
}

export default commonSaga;
