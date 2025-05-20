import { fetchCurrentUser, login } from "@/api/auth";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
} from "./authSlice";

function* loginSaga(action: ReturnType<typeof loginRequest>): Generator {
  try {
    const response = yield call(() => login(action.payload));
    yield put(loginSuccess(response));
  } catch (err: any) {
    yield put(loginFailure(err.response?.data?.message || "Login failed"));
  }
}

function* fetchUserSaga(): Generator {
  try {
    const response = yield call(fetchCurrentUser);
    console.log(response);

    yield put(fetchUserSuccess(response));
  } catch (err: any) {
    yield put(fetchUserFailure("Unable to fetch user"));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(fetchUserRequest.type, fetchUserSaga);
}
