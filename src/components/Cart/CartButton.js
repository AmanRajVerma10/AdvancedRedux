import { useDispatch, useSelector} from 'react-redux';
import classes from './CartButton.module.css';
import {uiActions} from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const quantity=useSelector(state=>state.cart.totalQuantity)
  const cartClickHandler=event=>{
    event.preventDefault();
    dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={cartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
