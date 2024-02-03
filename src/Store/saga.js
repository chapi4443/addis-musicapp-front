import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchDelete,
  fetchGet,
  fetchGetStatics,
  fetchInputData,
  fetchUpdate,
} from "./fatchData";
import { MusicPut, MusicGet, StaticsPut } from "./songs";

export function* watchFetchMusic() {
  yield takeLatest("music/MusicGet", fetchSongs);
  yield takeLatest("music/StaticsGet", fetchStatics);
  yield takeLatest("music/MusicUpdate", updateSongs);
  yield takeLatest("music/MusicDelete", deleteSongs);
  yield takeLatest("music/MusicInput", InputData);
}

function* InputData(action) {
  yield call(fetchInputData, action.payload.data);
  yield MusicGet();
}
function* fetchSongs() {
  const songs = yield call(fetchGet);
  yield put(MusicPut(songs));
}

function* fetchStatics() {
  const album = yield call(fetchGetStatics);
  yield put(StaticsPut(album));
}
function* updateSongs(action) {
  yield call(fetchUpdate, action.payload.data);
  yield MusicGet();
}
function* deleteSongs(action) {
  yield call(fetchDelete, action.payload);
  yield MusicGet();
}
