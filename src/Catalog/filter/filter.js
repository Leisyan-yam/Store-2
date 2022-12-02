import { useDispatch, useSelector } from "react-redux"
import { getSelectedCategory, filterCategory } from "../../redux/groceriesSlice"


const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory)
    const dispatch = useDispatch();
    return (
        <div>
           <p onClick={()=> {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected': 'categoryButton'}> {category}</p>
        </div>
    )
}

export default Filter