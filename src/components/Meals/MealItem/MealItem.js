import classes from './MealItem.module.css';

const MealItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.item.name}</h3>
        <div className={classes.description}>{props.item.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
