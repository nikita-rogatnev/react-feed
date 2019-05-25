import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './feed.less';

import Card from "../card/card";

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {feedItems} = this.props;

    return (
      <section className="feed">
        <div className="feed__container">
          {feedItems.map(function (item, index) {
            return <Card {...item.user} key={index}/>
          })}
        </div>
      </section>
    );
  }
}

Feed.propTypes = {
  feedItems: PropTypes.array,
};

export default Feed;
