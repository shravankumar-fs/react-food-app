import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../stores/cart-context';

const MealItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;
  const cartContext = useContext(CartContext);

  function addToCart(amount) {
    cartContext.addItem({
      id: props.item.id,
      name: props.item.name,
      amount: amount,
      price: props.item.price,
    });
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.item.name}</h3>
        <div className={classes.description}>{props.item.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.item.id} onAddToCart={addToCart} />
      </div>
    </li>
  );
};

export default MealItem;
