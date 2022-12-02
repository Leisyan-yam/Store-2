


import { useSelector } from "react-redux"
import { getSelectedCategory } from "../redux/groceriesSlice"
import Data from "./dataDishes"
import EachProduct from "./filter/eachProduct"



const Dishes = () => {
const selectedCategory = useSelector(getSelectedCategory)

return(<div className="dishes">
     {Data
     .filter(item => {
      if (selectedCategory === 'ALL') return true
      return selectedCategory === item.category.toUpperCase();
     })
     .map((element, id) => <EachProduct key={id} element = {element}/>
       )
       }
        </div>
    )
}
export default Dishes