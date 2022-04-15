import classes from './Cart.module.css';
import Modal from '../UI/Modal';
const Cart = (props) => {
  const cartItems = (
    <ul className={classes.CartItems}>
      {[{ name: 'ok', amount: '', price: '' }, { name: 'not ok' }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$35.9</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.btnClose} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.btnOrder}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
