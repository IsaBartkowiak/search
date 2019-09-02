import * as React from 'react';
import { TrackItem } from './track-search-item';
import { Track } from './models/track';
import { connect } from 'react-redux';
import InfiniteScroll from '../infinite-scroll/InfiniteScroll';
import { mapStateToProps, mapDispatchToProps } from './state/track-search-redux';

interface TrackContainerState {
  searchTerm: string;
}

interface TrackContainerProps {
  count: number;
  loading: boolean;
  errors: any;
  trackList: Track[];
  dispatchSearchTracks: (term: string) => void;
  dispatchLoadMoreTracks: (term: string, offset: string) => void;
  dispatchClearTracks: () => void;
}

class TrackContainer extends React.Component<TrackContainerProps, TrackContainerState> {

  constructor(props: TrackContainerProps) {
    super(props);
  }

  public handleTextChange = (event: any): void => {
    this.props.dispatchClearTracks();
    const term = event.target.value;
    this.setState({ searchTerm: term });
    if (term.length > 0) {
      this.props.dispatchSearchTracks(term);
    }
  };

  public handleLoadMore = (param: any) => {
    this.props.dispatchLoadMoreTracks(this.state.searchTerm, param);
  }

  public render() {
    return (
      <div>
        <input
          className="track-search-input"
          onChange={this.handleTextChange}
          placeholder={'Search'}
        />
        <InfiniteScroll
          isLoading={this.props.loading}
          hasError={this.props.errors ? true : false}
          hasMore={true}
          loadMore={this.handleLoadMore}>
              {this.props.trackList.map(track => (
                <TrackItem item={track} />
              ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackContainer);
