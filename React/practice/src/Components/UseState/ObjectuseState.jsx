import React,{useState} from 'react';

const ObjectuseState = () => {
    const [details, setDetails] = useState({})
    // const [name, setName]=useState("Hello");
    // const [age, setAge]=useState("Hello");
    // const [Message, setMessage]=useState("Hello");
    return (
        <div>
            <h1>This is ObjectInUseState Component</h1>
            <input type="text" placeholder="Name" onChange={(elem) => setDetails({ ...details, name: elem.target.value })} />
            <input type="text" placeholder="Age" onChange={(elem) => setDetails({ ...details, age: elem.target.value })} />
            <input type="text" placeholder="Message" onChange={(elem) => setDetails({ ...details, message: elem.target.value })} />
            <h1>Name: {details.name}</h1>
            <h1>Age: {details.age}</h1>
            <h1>Message: {details.message}</h1>
        </div> 
    );
};

export default ObjectuseState;