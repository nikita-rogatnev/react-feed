import React, {Component} from 'react';
import './app.less';

import Header from '../header/header';
import Feed from '../feed/feed';

const config = {
  url: '//api.massrelevance.com/MassRelDemo/kindle.json',
  quantity: '100',
  refresh: ''
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch(config.url)
      .then(results => results.json())
      .then(results => this.setState({'items': results}));
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <Feed feedItems={this.state.items}/>
      </React.Fragment>
    );
  }
}

export default App;
