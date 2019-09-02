import { action } from 'typesafe-actions';
import { Track } from '../models/track';
import { TrackActionTypes } from '../track.types';

export const searchTracksAction = (term: string) => action(TrackActionTypes.SEARCH_TRACKS, term);
export const searchTrackSuccessAction = (items: Track[]) => action(TrackActionTypes.SEARCH_TRACKS_SUCCESS, items);
export const searchTracksErrorAction = (m: string) => action(TrackActionTypes.SEARCH_TRACKS_FAILURE, m);

export const loadMoreTracksAction = (offset: string) => action(TrackActionTypes.LOAD_MORE_TRACKS, offset);
export const loadMoreTrackSuccessAction = (items: Track[]) => action(TrackActionTypes.LOAD_MORE_TRACKS_SUCCESS, items);
export const loadMoreTracksErrorAction = (m: string) => action(TrackActionTypes.LOAD_MORE_TRACKS_FAILURE, m);

export const clearTractsACtion = () => action(TrackActionTypes.CLEAR_TRACKS);
