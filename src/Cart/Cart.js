
import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice } from "../redux/cartSlice"
import CartItem from "./CartItem"

const Cart = () =>{
    const totalPrice = useSelector(getTotalPrice)
    const cartItems = useSelector(getCartItems);

   const makeOrder =() => {
    if(totalPrice === 0) {
        alert('your cart is empty')
    }
   }
   

    return (<div className="InsideCart">
        <div className="cartTitle">
        <h2> Items in your cart  </h2>
        <h2 >  Total <span className="total">{totalPrice}</span> $ </h2>
        </div>
        <div className="InTheCart">
        {cartItems.map((cartItem, id) => <CartItem key={id} cartItem={cartItem}/>)}
        </div>
        <button className="Order Btn " onClick={makeOrder}> make a purchase</button>
        </div>
    )
}

export default Cart