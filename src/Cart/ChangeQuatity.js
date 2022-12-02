const ChangeQuatity = ({quantity, setQuantity}) => {
    const addQuatity = () => {
        const newQuantity = quantity +1;
        setQuantity(newQuantity);
    }
    
    const removeQuatity = () => {
        const newQuatity = quantity -1;
        if (quantity <= 1) return;
        setQuantity(newQuatity)
    }
    
        return (
            <div className="quantities">
            <button className="btn" onClick={addQuatity}>+</button>
               <span> {quantity} </span>
               <button className="btn" onClick={removeQuatity}>-</button>
            </div>
        )
    }
    export default ChangeQuatity