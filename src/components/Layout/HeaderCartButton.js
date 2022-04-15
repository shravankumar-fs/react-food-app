import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../stores/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemLength = cartCtx.items.reduce(
    (cur, item) => cur + item.amount,
    0
  );

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.count}>{cartItemLength}</span>
    </button>
  );
};

export default HeaderCartButton;
