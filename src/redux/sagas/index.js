import { call, put, takeEvery,takeLatest,all,fork}  from 'redux-saga/effects';

import { authSagas } from "./authSaga";



export default function* rootSaga() {
    yield all([
        fork(authSagas),
    ])
  }