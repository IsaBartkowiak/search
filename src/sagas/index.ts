// tslint:disable-next-line: no-submodule-imports
import { all, fork } from 'redux-saga/effects';
import { watchSearchTracks, watchLoadMoreTracks, } from './tracks.sagas';

export default function* rootSaga() {
    yield all([
        fork(watchSearchTracks),
        fork(watchLoadMoreTracks),
    ]);
}