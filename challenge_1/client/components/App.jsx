import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import EventList from './EventList.jsx';
import ReactPaginate from 'react-paginate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      pageCount: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getEvents = this.getEvents.bind(this);
  }

  getEvents(text) {
    axios.get(`/events?q=${text}&_limit=${10}`)
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
    const { events, pageCount } = this.state;
    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} />
        <EventList events={events} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

export default App;
