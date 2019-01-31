import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('/events')
      .then((events) => {
        console.log(events);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmit(text) {
    return (event) => {
      event.preventDefault();
      console.log(text);
    };
  }

  render() {
    return (
      <div>
        <h2>hello world 2</h2>
        <SearchBar handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
