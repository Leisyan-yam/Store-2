
import { useState } from "react"
import { useDispatch } from "react-redux"
import ChangeQuatity from "../../Cart/ChangeQuatity"
import { addItemToCart } from "../../redux/cartSlice";

const EachProduct =({element}) => {
   const dispatch = useDispatch(); 
   const [quantity, setQuantity]= useState(1);
        return(
        <div className="each-dish">
        <img className="dishImage" src={`${element.img}.jpg`} alt="dish"/>
        <h3 className="name"> {element.name} </h3>
        <p className="price"> {element.price} $ per pound</p>
        <ChangeQuatity quantity={quantity} setQuantity={setQuantity}/>
        <button className="AddBtn Btn" onClick={()=> {dispatch(addItemToCart({element,quantity}))}}> add to cart </button>
        </div>
    )
}
export default EachProduct