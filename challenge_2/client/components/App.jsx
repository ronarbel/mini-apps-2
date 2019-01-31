import React from 'react';
import axios from 'axios';
import ChartDisplay from './ChartDisplay.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: {},
    };
  }

  componentDidMount() {
    axios.get('/prices')
      .then(res => this.setState({ prices: res.data }))
      .catch(console.log);
  }

  render() {
    const { prices } = this.state;

    return (
      <div>
        <ChartDisplay prices={prices} />
      </div>
    );
  }
}

export default App;
