import './styles/main.scss';

import React from 'react';
import ReactDom from 'react-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="main_header">
        <h1>This is my nav!!</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({count: prevState.count + 1}));
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <h1>Hello World</h1>
        <p onClick={this.handleClick}>Counter: {this.state.count}</p>
        {console.log('hello there')}
        <p>paleo sustainable +1 kitsch four loko Blue Bottle yatta yatta yatta</p>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
