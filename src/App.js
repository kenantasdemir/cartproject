import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CartList from './components/CartList';
import { useEffect } from 'react';
import { calculateTotal } from './control/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])


  return (
    <div>
      <Navbar />
      <CartList />
    </div>
  );
}

export default App;
