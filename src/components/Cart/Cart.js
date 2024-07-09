import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const Cart = (props) => {
  const items = useSelector(state => state.cart.items)

  const dispatch = useDispatch()
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <div className={classes.modal}>

      <Card className={classes.cart}>
        {items.length === 0 ? <h2>Your Cart is Empty</h2> : (
          <>
            <h2>Your Shopping Cart</h2>
            <ul>{items.map(items => (
              <CartItem
                key={items.id}
                item={{
                  id: items.id,
                  title: items.name,
                  quantity: items.quantity,
                  total: items.totalPrice,
                  price: items.price
                }}
              />
            ))
            }
            </ul>

          </>)}
        <button className={classes['button--alt']} onClick={toggleCartHandler}>Close</button>
      </Card>

    </div>
  );
};

export default Cart;
