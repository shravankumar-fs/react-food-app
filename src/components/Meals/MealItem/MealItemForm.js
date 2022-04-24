import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;

    if (
      enteredAmount.trim().length === 0 ||
      +enteredAmount < 1 ||
      +enteredAmount > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(+enteredAmount);
  };

  return (
    <form className={classes.formClass} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          defaultValue: '1',
        }}
      />
      <button type='submit'> + Add</button>
      {!amountValid && <p>Enter Valid amount</p>}
    </form>
  );
};

export default MealItemForm;
