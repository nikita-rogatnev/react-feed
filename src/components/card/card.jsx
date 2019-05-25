import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './card.less';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, screen_name, url, description, profile_image_url_https} = this.props;

    return (
      <article className="card">
        <header className="card__header">
          <h1 className="card__title">
            <img src={profile_image_url_https} className="card__image" alt={screen_name}/>
            <a href={url} target="_blank" rel="noopener noreferrer" className="card__name">
              {name}
            </a>
            <a href={url} target="_blank" rel="noopener noreferrer" className="card__nickname">
              @{screen_name}
            </a>
          </h1>
        </header>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <footer className="card__footer">
          <span className="card__likes">
            ❤
          </span>
        </footer>
      </article>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string,
  screen_name: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  profile_image_url_https: PropTypes.string,
};

export default Card;
