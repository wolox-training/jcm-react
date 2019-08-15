import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import Button from '@components/Button';
import { bookSelectedPropType } from '@constants/propTypes';

import styles from './styles.scss';

class Item extends PureComponent {
  handleAddItem = () => {
    const { item, onAddItem } = this.props;
    onAddItem(item.id);
  };

  handleRemoveItem = () => {
    const { item, onRemoveItem } = this.props;
    onRemoveItem(item.id);
  };

  render() {
    const { item } = this.props;
    return (
      <li className={styles.item}>
        <h3 className={styles.title}>{item.name}</h3>
        <span className={styles.contentButtons}>
          <span className={styles.quantity}>{item.quantity}</span>
          <Button className={styles.buttonCart} onClick={this.handleAddItem}>
            <i className="fa fa-plus" />
          </Button>
          <Button className={styles.buttonCart} onClick={this.handleRemoveItem} isDanger>
            <i className="fa fa-trash" />
          </Button>
        </span>
      </li>
    );
  }
}

Item.propTypes = {
  item: bookSelectedPropType,
  onAddItem: func.isRequired,
  onRemoveItem: func.isRequired
};

export default Item;
