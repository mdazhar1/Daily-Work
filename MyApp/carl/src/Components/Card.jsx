import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';

const Card1 = () => {
    const [data, setData]=useState([])
    const [name, setName]=useState();
    const [image, setImage]=useState();
    const [city,setCity]=useState();

    const dispatch=useDispatch()
    const handle=()=>{
        dispatch({type:"ADD", data:{name,image,city}})
    }

    const result=useSelector((state)=>state.cardReducer.cardData)


    useEffect(()=>{
        setData(result)
    },[result])
    
    return (
        <div>
            <input type="text" placeholder='Name' onChange={(e)=> setName(e.target.value)}/>
            <input type="text" placeholder='Image link' onChange={(e)=> setImage(e.target.value)}/>
            <input type="text" placeholder='City' onChange={(e)=> setCity(e.target.value)}/>
            <button onClick={handle}>Add</button>
            {data.map((e)=>{
                return(
                    <div>
                         <Card>
                <Card.Header>{e.name}</Card.Header>
                    <Card.Body>
                        <img src={e.image} alt="" style={{height:"200px", width:"200px"}} />
                    </Card.Body>
                    <Card.Footer>{e.city}</Card.Footer>
                
            </Card>
                    </div>
                )
                
            })}
           
        </div>
    );
};

export default Card1;