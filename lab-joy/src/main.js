import React from 'react';
import ReactDom from 'react-dom';
import './styles/main.scss';
import faker from 'faker';
import * as cowsay from 'cowsay';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { content: faker.lorem.sentence() }
        this.clickButton = this.clickButton.bind(this);
    }

    clickButton() {
        this.setState(() => {
            return { content: faker.lorem.sentence() };
        });
    }

    render() {
        return (
            <div id="wrapper">
                <h1>Generate Cowsay Lorem</h1>
                <div class="center">
                    <button onClick={this.clickButton}>Click Me</button>
                </div>
                <pre>{cowsay.say({ text: this.state.content })}</pre>
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)