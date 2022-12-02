import { useDispatch } from "react-redux"
import Data from "../Catalog/dataDishes"
import { removeItemFromCart } from "../redux/cartSlice"

const CartItem = ({cartItem}) => {
    console.log(cartItem)
    const product = Data.find(element => element.id === cartItem.elementId)
    console.log(product)
    const dispatch = useDispatch();
    return(
        <div className="cartItems">
         <span>{product.name}: {cartItem.quantity} pound(s) <pre>Total price: $ {product.price * cartItem.quantity} </pre> <span onClick={()=>{dispatch(removeItemFromCart({cartItemId: cartItem.id}))}}><img className="delete" src="https://img.icons8.com/wired/64/000000/trash.png" alt="delete"/></span></span>
        </div>
    )
}
export default CartItem