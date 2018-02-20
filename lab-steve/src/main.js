import './styles/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import { say } from 'cowsay';

class App extends React.Component {
  constructor(props) {
    super(props);
    let content = say({ text: faker.random.words(7) });
    this.state = { content: content };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let content = say({ text: faker.random.words(7) });
    this.setState(() => ({ content: content }));
  }

  render() {
    return (
      <div className="app">
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.handleClick}>Click Me</button>
        <pre>{ this.state.content }</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
