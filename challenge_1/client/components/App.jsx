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
      searchText: '',
      currentPage: 1,
      pageCount: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  getEvents() {
    const { searchText, currentPage } = this.state;
    axios.get(`/events?q=${searchText}&_page=${currentPage}&_limit=${10}`)
      .then((events) => {
        const totalCount = events.headers['x-total-count'];
        const pageCount = Math.ceil(totalCount / 10);
        this.setState({ events: events.data, pageCount });
      })
      .catch((err) => { console.log(err); });
  }

  handleSubmit(searchText) {
    return (event) => {
      event.preventDefault();
      this.setState({ searchText, currentPage: 1 }, this.getEvents);
    };
  }

  handlePageClick(page) {
    this.setState({ currentPage: page.selected + 1 });
    this.getEvents();
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
