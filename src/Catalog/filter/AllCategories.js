import Filter from "./filter"


const AllCategories = () => {
    return (
        
        <div className="categories"> 
        <h2>Make a choice </h2>
        {['FRUITS', 'VEGETABLES', 'BERRIES', 'ALL'].map(
            (category, id) => <Filter key={id} category={category}/>
        )}
            
        </div>
    )
}
export default AllCategories