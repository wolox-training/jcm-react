import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { arrayOf } from 'prop-types';
import { bookSelectedPropType, bookPropType } from '@constants/propTypes';
import actionsCreators from '@redux/book/actions';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(actionsCreators.getBooks());
  }

  onSearch = value => {
    const { dispatch } = this.props;
    dispatch(actionsCreators.searchBook(value));
  };

  addToCart = item => {
    const { dispatch } = this.props;
    dispatch(actionsCreators.addToCart(item));
  };

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.removeItem,
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
    const { bookSelected, books } = this.props;
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.onSearch} />
          {books.length ? (
            books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {bookSelected.length ? <ShoppingCart /> : null}
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ bookSelected, books }) => ({
  books,
  bookSelected
});

App.propTypes = {
  bookSelected: arrayOf(bookSelectedPropType),
  books: arrayOf(bookPropType)
};

export default connect(mapStateToProps)(App);
