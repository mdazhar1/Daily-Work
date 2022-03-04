import React from 'react';
import { useSelector,useDispatch } from 'react-redux';


const ProductDetails = () => {
    const dispatch=useDispatch()
    const itemDetail=useSelector((state)=>state.productReducer.details)
    // console.log("itemDetails", itemDetail)
    return (
        <div>
        {itemDetail.map((item)=>{
            return(
                <div className='M' style={{margin:"50px"}}>
                <img src={item.image} width="250px" height="250px" alt="" />
                <h4>Price:${item.price}</h4>
                <h4>{item.title.slice(0, 20)+"..."}</h4>
                <button onClick={()=> dispatch({type: "Add-Cart", data:item})}>Add to Cart</button>
            </div>
            )
           })}
        </div>
    );
};
export default ProductDetails;