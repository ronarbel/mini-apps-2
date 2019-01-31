import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get('/events')
      .then((events) => {
        console.log(events);
      })
      .catch((err) =>{
        console.log(err);
      });
  }

  render() {
    return (
      <h2>hello world 2</h2>
    );
  }
}

export default App;
