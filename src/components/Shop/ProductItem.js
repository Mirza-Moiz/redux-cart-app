import Card from '../UI/Card';
import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './ProductItem.module.css';


const ProductItem = (props) => {
  const dispat = useDispatch();
  const { title, price, description, id } = props;
  const addItemtoCartHandler = () => {
    dispat(
      cartActions.addItemToCart(
        {
          id,
          title,
          price
        }
      )
    )
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemtoCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
