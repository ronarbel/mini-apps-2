/* eslint-env browser */
import React from 'react';
import BowlInput from './BowlInput.jsx';
import ScoreTable from './ScoreTable.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      throws: [],
    };

    this.handleInput = this.handleInput.bind(this);
  }

  
  handleInput(value) {
    value = Number(value);
    const { throws } = this.state;

    if (value < 0 || value > 10) {
      alert('Must submit value between 0 - 10!');
    } else {
      // eslint-disable-next-line no-lonely-if
      if (throws.length % 2 === 0) {
        if (value === 10) {
          throws.push(null);
          throws.push(10);
        } else {
          throws.push(value);
        }
        this.setState({ throws });
      } else {
        const previousThrow = throws[throws.length - 1];

        if (previousThrow + value > 10) {
          alert(`Must submit value between 0 - ${10 - previousThrow}`);
        } else {
          throws.push(value);
          this.setState({ throws });
        }
      }
    }
  }

  render() {
    const { throws } = this.state;
    return (
      <div>
        <ScoreTable throws={throws} />
        <BowlInput handleInput={this.handleInput} />
      </div>
    );
  }
}

export default App;
