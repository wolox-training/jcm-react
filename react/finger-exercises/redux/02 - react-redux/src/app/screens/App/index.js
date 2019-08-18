import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { arrayOf, func, bool } from 'prop-types';
import { bookSelectedPropType, bookPropType } from '@constants/propTypes';
import bookActions from '@redux/book/actions';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  handleSearchBook = value => this.props.searchBook(value);

  handleAddToCart = item => this.props.addToCart(item);

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.handleAddToCart
    },
    remove: {
      text: 'Remove',
      function: this.handleRemoveItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const { bookSelected } = this.props;
    const showButton = !bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    const { books, bookSelected, booksLoading } = this.props;
    const dataStatus = booksLoading ? 'Loading Data...' : 'No Data';

    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.handleSearchBook} />
          {books.length ? (
            books.map(this.renderBooks)
          ) : (
            <div className={styles.dataStatus}>
              <h2 className={styles.title}>{dataStatus}</h2>
            </div>
          )}
        </div>
        {bookSelected.length ? <ShoppingCart /> : null}
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ books, bookSelected, booksLoading }) => ({
  books,
  bookSelected,
  booksLoading
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(bookActions.getBooks()),
  searchBook: value => dispatch(bookActions.searchBook(value)),
  addToCart: item => dispatch(bookActions.addToCart(item))
});

App.propTypes = {
  bookSelected: arrayOf(bookSelectedPropType),
  books: arrayOf(bookPropType),
  booksLoading: bool.isRequired,
  getBooks: func.isRequired,
  searchBook: func.isRequired,
  addToCart: func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
