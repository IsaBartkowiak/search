// tslint:disable-next-line: no-submodule-imports
import { put, call, takeLatest, delay } from 'redux-saga/effects';
import * as trackActions from '../features/track-search/state/track-actions';
import { TrackActionTypes } from '../features/track-search/track.types';
import { PayloadAction } from 'typesafe-actions';
import { tracksApi } from '../api/';

export function* searchTracks(action: PayloadAction<TrackActionTypes.SEARCH_TRACKS, string>) {
  try {
    yield delay(500);
    const tracks: any = yield call(tracksApi.search, action.payload);
    yield put(trackActions.searchTrackSuccessAction(tracks.data.data));
  } catch (error) {
    yield put(trackActions.searchTracksErrorAction(error));
  }
}

export function* loadMoreTracks(action: PayloadAction<TrackActionTypes.LOAD_MORE_TRACKS, string>) {
  try {
    const tracks: any = yield call(tracksApi.search, action.payload);
    yield put(trackActions.loadMoreTrackSuccessAction(tracks.data.data));
  } catch (error) {
    yield put(trackActions.loadMoreTracksErrorAction(error));
  }
}

export function* watchSearchTracks() {
  yield takeLatest(TrackActionTypes.SEARCH_TRACKS, searchTracks);
}

export function* watchLoadMoreTracks() {
  yield takeLatest(TrackActionTypes.LOAD_MORE_TRACKS, loadMoreTracks);
}
