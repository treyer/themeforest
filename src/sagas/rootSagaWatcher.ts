import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  hideLoader,
  increaseEmployeeCountToShow,
  showLoader,
} from "store/actions/actionCreators";
import { HANDLE_INCREASE_EMPLOYEE_COUNT_TO_SHOW } from "store/actions/constants";

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export default function* rootSagaWatcher() {
  yield all([
    takeEvery(
      HANDLE_INCREASE_EMPLOYEE_COUNT_TO_SHOW,
      handleIncreaseEmployeeCountWorker,
    ),
  ]);
}

function* handleIncreaseEmployeeCountWorker() {
  yield put(showLoader());
  yield call(delay, 500);
  yield put(increaseEmployeeCountToShow());
  yield put(hideLoader());
}
