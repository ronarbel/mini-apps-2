import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import EventList from './EventList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getEvents = this.getEvents.bind(this);
  }

  getEvents(text) {
    axios.get(`/events?q=${text}`)
      .then((events) => {
        console.log(events.data);
        this.setState({ events: events.data });
      })
      .catch((err) => { console.log(err); });
  }

  handleSubmit(text) {
    return (event) => {
      event.preventDefault();
      this.getEvents(text);
    };
  }

  render() {
    const { events } = this.state;
    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
