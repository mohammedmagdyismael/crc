import { fork } from 'redux-saga/effects';
import commonSaga from 'app/modules/common/sagas';

function* rootSaga() {
  yield fork(commonSaga);
}

export default rootSaga;
