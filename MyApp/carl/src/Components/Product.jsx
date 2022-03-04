import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Product.css";
const Product = () => {
    const [data, setData]=useState([])
    const [title, setTitle]=useState();
    const [image, setImage]=useState();
    const [description,setDescription]=useState();

    const dispatch=useDispatch()
    const handle=()=>{
        dispatch({type:"ADD", data:{title,image,description}})
    }

    const result=useSelector((state)=>state.ProductReducer.shayari)


    useEffect(()=>{
        setData(result)
    },[result])
    
    return (
        <div>
            <div className='baigan'>
            <input type="text" placeholder='Title' onChange={(e)=> setTitle(e.target.value)}/>
            <input type="text" placeholder='Image link' onChange={(e)=> setImage(e.target.value)}/>
            <input type="text" placeholder='Description' onChange={(e)=> setDescription(e.target.value)}/>
            <button className='button' onClick={handle}><span>Launch</span></button>
            </div>
           {data.map((e)=>{
               return(
                  <div className='pdiv'>
                      <h2 className='H'>{e.title}</h2>
                      <img src={e.image} alt="" />
                      <p>{e.description.substr(0,100)}</p>
                  </div>
               )
           })} 
        </div>
    );
}; 

export default Product;