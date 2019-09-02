import * as React from 'react';
import { Track } from './models/track';

interface TrackItemProps {
  item: Track;
}

export const TrackItem: React.FC<TrackItemProps> = props => {
  return (
    <div>
      <span>
        <img src={props.item.album ? props.item.album.cover_small : ''} alt=""/>
          {props.item.title}
      </span>
    </div>
  );
};
