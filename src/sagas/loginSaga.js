import { SUCCESS_LOGIN, FAILED_LOGIN, FETCH_LOGIN } from "@constants/action-names";
import { put, takeEvery } from 'redux-saga/effects';
import {apiLogin} from '@services/auth-api';
import validError from "@utils/msgError";
import {home} from '@actions/changeRoot';
function* login(action) {
  const {data, err} = yield apiLogin(action.payload)
  if (err) {
    yield put({ type: FAILED_LOGIN });
    validError(action.payload, err)
    return;
  }
  yield put({ type: SUCCESS_LOGIN, data });
  yield put(home());
}

function* loginSaga () {
  yield takeEvery(FETCH_LOGIN, login)
}

export default loginSaga