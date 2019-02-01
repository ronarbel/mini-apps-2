/* eslint-env browser */
import React from 'react';
import BowlInput from './BowlInput.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(value) {
    if (value < 0 || value > 10) {
      alert('Must submit value between 0 - 10!');
    } else {
      console.log('Bowl value: ', value);
    }
  }

  render() {
    return (
      <div>
        <BowlInput handleInput={this.handleInput} />
      </div>
    );
  }
}

export default App;
