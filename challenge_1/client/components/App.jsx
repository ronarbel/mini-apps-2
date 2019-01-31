import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import SearchBar from './SearchBar.jsx';
import EventList from './EventList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      pageCount: 1,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  getEvents(text) {
    axios.get(`/events?q=${text}&_limit=${10}`)
      .then((events) => {
        const totalCount = events.headers['x-total-count'];
        const pageCount = totalCount / 10;
        this.setState({ events: events.data, pageCount });
      })
      .catch((err) => { console.log(err); });
  }

  handleSubmit(text) {
    return (event) => {
      event.preventDefault();
      this.getEvents(text);
    };
  }

  handlePageClick(pageNumber) {
    console.log(pageNumber.selected);
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
