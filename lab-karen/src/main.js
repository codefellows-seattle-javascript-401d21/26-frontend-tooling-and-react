import './style/main.scss';
import {say} from 'cowsay';
import faker from 'faker';
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: ''};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({content: faker.lorem.sentences});
  }

  render() {
    return (
      <div className="app">
        <h1>Generate Cowsay Ipsum</h1>
        <button onClick={this.handleClick}>Click Me</button>
        <pre>{say({text: faker.lorem.sentences()})}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
