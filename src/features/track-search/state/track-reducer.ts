import { Reducer } from 'redux';
import { TrackState, TrackActionTypes } from '../track.types';

const initialState: TrackState = {
  items: [],
  errors: undefined,
  loading: false,
};

const reducer: Reducer<TrackState> = (state = initialState, action) => {
  switch (action.type) {
    case TrackActionTypes.SEARCH_TRACKS || TrackActionTypes.LOAD_MORE_TRACKS: {
      return { ...state, loading: true };
    }
    case TrackActionTypes.SEARCH_TRACKS_SUCCESS: {
        return { ...state, loading: false, items: action.payload };
    }

    case TrackActionTypes.LOAD_MORE_TRACKS_SUCCESS: {
      return { ...state, loading: false, items: [...state.items, ...action.payload] };
    }

    case TrackActionTypes.SEARCH_TRACKS_FAILURE || TrackActionTypes.LOAD_MORE_TRACKS_FAILURE: {
      return { ...state, loading: false, errors: action.payload };
    }

    case TrackActionTypes.CLEAR_TRACKS : {
      return { ...state, items: [] };
    }

    default: {
      return state;
    }
  }
};

export { reducer as trackReducer };
