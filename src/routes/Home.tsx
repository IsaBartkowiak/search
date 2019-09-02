import * as React from 'react';
import { TrackPage } from '../features/track-search/track-search-page';
import { Header } from '../components/header/header';

export default () => {
  return (
    <React.Fragment>
      <Header />
      <TrackPage />
    </React.Fragment>
  );
};
