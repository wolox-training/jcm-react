import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf } from 'prop-types';
import bookActions from '@redux/book/actions';
import { bookSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';

import Item from './components/Item';
import styles from './styles.scss';

class ShoppingCart extends PureComponent {
  state = {
    open: false
  };

  toggleContent = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  total = (accumulator, currentValue) => accumulator + currentValue.quantity;

  handleAddItem = itemId => this.props.addItem(itemId);

  handleRemoveItem = itemId => this.props.removeItem(itemId);

  renderItem = item => (
    <Item key={item.id} item={item} onAddItem={this.handleAddItem} onRemoveItem={this.handleRemoveItem} />
  );

  render() {
    const { bookSelected } = this.props;
    return (
      <Fragment>
        <Button className={styles.buttonCart} onClick={this.toggleContent}>
          <i className="fa fa-shopping-cart" />
        </Button>
        <div className={`${styles.container} ${this.state.open ? styles.open : ''}`}>
          <h1 className={styles.title}>Cart</h1>
          <ul className={styles.content}>{bookSelected.map(this.renderItem)}</ul>
          <h2 className={`${styles.title} ${styles.total}`}>Total: {bookSelected.reduce(this.total, 0)}</h2>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ bookSelected }) => ({
  bookSelected
});

const mapDispatchToProps = dispatch => ({
  addItem: itemId => dispatch(bookActions.addItem(itemId)),
  removeItem: itemId => dispatch(bookActions.removeItem(itemId))
});

ShoppingCart.propTypes = {
  addItem: func.isRequired,
  removeItem: func.isRequired,
  bookSelected: arrayOf(bookSelectedPropType).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
