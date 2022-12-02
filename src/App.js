
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Catalog from './Catalog/Catalog';
import Home from './Home';
import Cart from './Cart/Cart';
import { useSelector } from 'react-redux';
import { getTotalPrice } from './redux/cartSlice';


function App() {
  const totalPrice = useSelector(getTotalPrice)
  return  <div> <div className="bg"></div>
 <Router>
<nav>
  <Link className='linkLogo' to='/home'> Good Food</Link>
  <Link className='link' to='Catalog'>Catalog </Link>
  <Link className='link box'to='/Cart'> <img className='cartIcon' src="https://img.icons8.com/ios/50/000000/favorite-cart.png" alt='cart'/> <span className='totalSum'> {totalPrice}$ </span></Link>


</nav>

<Routes>
<Route path='/' element = {<Home/>}/>
<Route path='/home' element = {<Home/>}/>
<Route path='/Catalog' element = {<Catalog/>}/>
<Route path='/Cart' element = {<Cart/> }/>
</Routes>
</Router>

</div>
}

export default App;