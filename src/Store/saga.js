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
  try {
    yield call(fetchInputData, action.payload.data);
    yield MusicGet();
  } catch (error) {
    console.log(error);
  }
}
function* fetchSongs() {
  try {
    const songs = yield call(fetchGet);
    yield put(MusicPut(songs));
  } catch (error) {
    console.log(error);
  }
}

function* fetchStatics() {
  try {
    const album = yield call(fetchGetStatics);
    yield put(StaticsPut(album));
  } catch (error) {
    console.log(error);
  }
}
function* updateSongs(action) {
  try {
    yield call(fetchUpdate, action.payload.data);
    yield MusicGet();
  } catch (error) {
    console.log(error);
  }
}
function* deleteSongs(action) {
  try {
    yield call(fetchDelete, action.payload);
    yield MusicGet();
  } catch (error) {
    console.log(error);
  }
}
