import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getEvents = this.getEvents.bind(this);
  }

  getEvents(text) {
    axios.get('/events')
      .then((events) => {
        console.log(events);
        this.setState({ events });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmit(text) {
    return (event) => {
      event.preventDefault();
      this.getEvents(text);
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
