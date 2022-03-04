import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
import "./Login.css";



const LoginPage = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const [entry, setEntry]=useState([]);

    const submitDetails=()=>{
        const newEntry={email:email, password:password}
        setEntry([...entry, newEntry])
        document.getElementById("clear").clearAll(" ")
    }

    return (
        <>
           <form action="" className='M'>
               <div>
                   <label htmlFor="email">Email:</label><br />
                   <input type="email" name="email" id="email" autoComplete='off' value={email} onChange={(e)=> setEmail(e.target.value)}/>
               </div><br />
               <div>
                   <label htmlFor="password">Password:</label><br />
                   <input type="password" name="password" id="password" autoComplete='off' value={password} onChange={(e)=> setPassword(e.target.value)}/>
               </div>
               <button onClick={submitDetails} id="clear">Login</button>
               </form> 
        </>
    );
};

export default LoginPage;