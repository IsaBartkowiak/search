import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import { trackReducer } from '../features/track-search/state/track-reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  tracks: trackReducer,
});

export default rootReducer;
