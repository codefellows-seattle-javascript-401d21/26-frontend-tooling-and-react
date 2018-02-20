'use strict';

import './style/main.scss';
// const React = require('react')
import React from 'react';
import ReactDom from 'react-dom';
import { say } from 'cowsay';
import Faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: say({text: 'Click Me!'}),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let sentence = Math.ceil(Math.random()* 12 + 2);
    this.setState(() => ({text: say({text: Faker.random.words(sentence)})}));
  }

  render() {
    return (
      <div className="app">
        <h1>Generate Cowsay Lorem:</h1>
        <button onClick={this.handleClick}>Click Me!</button>
        <pre>{this.state.text}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));

//* Should contain the entire application's view and state
// * Should have a property on the state called content 
// * Should create a view with the following display
//   * A heading with the title "Generate Cowsay Lorem"
//   * A Button that displays "click me"
//     * `onClick` the button should generate new content on the app state using cowsay and faker
//   * A pre tag that displays the App state (content)