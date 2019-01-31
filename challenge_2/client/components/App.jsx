import React from 'react';
import axios from 'axios';
import ChartDisplay from './ChartDisplay.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceData: {},
    };
  }

  componentDidMount() {
    axios.get('/prices')
      .then(res => this.setState({ priceData: res.data }))
      .catch(console.log);
  }

  render() {
    const { priceData } = this.state;

    return (
      <div>
        <ChartDisplay priceData={priceData} />
      </div>
    );
  }
}

export default App;
