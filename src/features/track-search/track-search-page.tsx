import * as React from 'react';
import TrackContainer from './track-search-container';
import './track-search.scss';

export const TrackPage: React.FC = () => {
  return (
      <section className="track-search">
        <TrackContainer />
      </section>
  );
};
