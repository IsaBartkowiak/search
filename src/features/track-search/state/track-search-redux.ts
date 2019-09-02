import { RootState } from '../../../store/types';
import { bindActionCreators } from 'redux';
import { searchTracksAction, loadMoreTracksAction, clearTractsACtion } from './track-actions';

export const mapStateToProps = (state: RootState) => ({
    loading: state.tracks.loading,
    errors: state.tracks.errors,
    count: 0,
    trackList: state.tracks.items,
});

export const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    dispatchSearchTracks: searchTracksAction,
    dispatchLoadMoreTracks: loadMoreTracksAction,
    dispatchClearTracks: clearTractsACtion,
}, dispatch);
