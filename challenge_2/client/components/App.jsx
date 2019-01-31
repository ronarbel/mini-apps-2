import React from 'react';
import axios from 'axios';

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
    return (
      <div>rendering from app</div>
    );
  }
}

export default App;
