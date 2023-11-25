import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store';

const CartButton = (props) => {
  const showCart=useSelector(state=>state.cart.showCart);
  const dispatch=useDispatch();
  const cartClickHandler=event=>{
    event.preventDefault();
    if(showCart){
      dispatch(cartActions.hideCart())
    }
    else{
      dispatch(cartActions.showCart());
    }

  }
  return (
    <button className={classes.button} onClick={cartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
