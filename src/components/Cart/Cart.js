import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes.CartItems}>
      {[].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$35.9</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.btnClose}>Close</button>
        <button className={classes.btnOrder}>Order</button>
      </div>
    </div>
  );
};
export default Cart;