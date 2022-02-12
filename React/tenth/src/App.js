// import FethingDataFromApi from './API/FethingDataFromApi';
// import PostData from "./API2/PostData";
// import FetchData from './API2/FetchData';
import './App.css';
// import FetchDataFromRedux from './State/Redux/FetchDataFromRedux';
import NavReducer from './State/Redux/NavReducer';
import BodyReducer from './State/Redux/BodyReducer';

// import ProductList from './Components/Shopping/ProductList';
// import {ClassCounter} from "./Components/ClassCounter"
// import {ClassCounter2} from "./Components/ClassCounter2"
function App() {
  return (
    <div className='App'>
     {/* <ClassCounter/> */}
     {/* <ClassCounter2/> */}
     {/* <ProductList/> */}
     {/* <FethingDataFromApi/> */}
    {/* //  <PostData/> */}
     {/* <FetchData/> */}
     {/* <FetchDataFromRedux/> */}
     <NavReducer/>
     <BodyReducer/>
    </div>
  );
}

export default App;
