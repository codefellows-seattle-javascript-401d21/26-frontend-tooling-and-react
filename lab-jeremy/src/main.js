import './styles/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { say } from 'cowsay';
import Faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: say({text: 'Push the click me button!'}),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({content: say({text: Faker.random.words(4)})}));
  }

  render() {
    return (
      <div className="app">
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.handleClick}>CLICK ME!</button>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
