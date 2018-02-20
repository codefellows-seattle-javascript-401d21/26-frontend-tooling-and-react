'use strict';
import './styles/main.scss';

import React from 'react'; // ES6 Import Syntax is used by react.
import ReactDom from 'react-dom';
import faker from 'faker';
import * as cowsay from 'cowsay';

let cowlist = [];
for (let key in cowsay) if (typeof cowsay[key] !== 'function') cowlist.push(key.toString());
cowlist = cowlist.map(v => <option value={v} key={v}>{v.charAt(0) + v.slice(1).toLowerCase()}</option>);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: cowsay.say({ text: 'Click My Button'}),
      cow: 'DEFAULT',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ cow: e.target.value });
  }

  handleClick() {
    let r = Math.ceil(Math.random() * 2 + 2);
    this.setState(() => ({words: cowsay.say({ text: faker.random.words(r), cow: cowsay[this.state.cow]})}));
  }

  render() {
    return (
      <div className="app">
        <button onClick={this.handleClick}>Click For Cowsay</button>
        <select onChange={this.handleChange}>{cowlist}</select>
        <pre>{this.state.words}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));


