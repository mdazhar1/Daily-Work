
import './App.css';
// import Card1 from './Components/Card';
// import Course from './Components/Course';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Product from './Components/Product';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousel/>
     <Product/>
     <Footer/>
     {/* <Course/> */}
     {/* <Card1/> */}
    </div>
  );
}

export default App;
