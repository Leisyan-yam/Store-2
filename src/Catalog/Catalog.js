import AllCategories from "./filter/AllCategories"
import Dishes from "./Dishes"

const Catalog = () => {
    return (
        <div className="App">
        <div >
        <AllCategories/>
        </div>
        <div className="products">
        <Dishes/> 
        </div>
        </div>
    )
}
export default Catalog