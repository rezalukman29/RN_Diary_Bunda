import { call, put, takeEvery,takeLatest,all}  from 'redux-saga/effects';
import { apiLogin, apiRegister } from '../api';

import * as type from '../types/auth';
import * as alertType from '../types/alert';


const delay = (ms) => new Promise(res => setTimeout(res, ms))
function* loginAction(action) {
    const user = action.user
    try {
                    yield delay(3000)
                    yield put({type: type.LOGIN_SUCCESS, payload: user})
                    yield put({type: alertType.SHOW_ALERT, payload: true, message: user, status: 'success'})
                    yield delay(4000)
                    yield put({type: alertType.HIDE_ALERT, payload: false})   
    } catch (error) {
  
        yield put({type: type.LOGIN_FAILED, error: error})
        yield put({type: alertType.SHOW_ALERT, payload: true, status: 'danger'})
        yield delay(4000)
        yield put({type: alertType.HIDE_ALERT, payload: false})  
        
    }
  }




export function* authSagas() {
    yield all([
      takeEvery(type.LOGIN_REQUEST, loginAction),

    ]);
  }

