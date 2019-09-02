import * as React from 'react';
import { Loading } from '../../components/loading/loading';

interface InfiniteScrollState {
  offset: number;
}

interface InfiniteScrollProps {
  loadMore: (offset: string) => void;
  hasMore: boolean;
  hasError: boolean;
  isLoading: boolean;
}

export default class InfiniteScroll extends React.Component<InfiniteScrollProps, InfiniteScrollState> {

  constructor(props: InfiniteScrollProps) {
    super(props);
    this.state = {
      offset: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { hasError, hasMore, isLoading } = this.props;

    if (hasError || isLoading || !hasMore) { return; }

    if (this.isScrollEnd()) {
        this.setState({ offset: this.state.offset + 1}, () => {
          this.props.loadMore(this.state.offset.toString());
        });
    }
  };

  isScrollEnd() {
    return window.innerHeight + document.documentElement.scrollTop
    === document.documentElement.offsetHeight;
  }

   render() {
    return (
        <div className="infinite-loading">
            { this.props.isLoading ? <Loading /> : null }
            {this.props.children}
        </div>
    );
  }

}
