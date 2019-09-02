import { Track } from './models/track';

export enum TrackActionTypes {
    SEARCH_TRACKS = 'tracks/SEARCH_TRACK',
    SEARCH_TRACKS_SUCCESS = 'tracks/SEARCH_TRACK_SUCCESS',
    SEARCH_TRACKS_FAILURE = 'tracks/SEARCH_TRACK_FAILURE',

    LOAD_MORE_TRACKS = 'tracks/LOAD_MORE_TRACK',
    LOAD_MORE_TRACKS_SUCCESS = 'tracks/LOAD_MORE_TRACK_SUCCESS',
    LOAD_MORE_TRACKS_FAILURE = 'tracks/LOAD_MORE_TRACK_FAILURE',

    CLEAR_TRACKS = 'tracks/CLEAR_TRACKS',
}

export interface TrackState {
    readonly loading: boolean;
    readonly items: Track[];
    readonly errors?: string;
}
