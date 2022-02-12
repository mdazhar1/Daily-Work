import React from 'react';
import NavBar from '../A-Navigation/NavBar';
import Cards from '../B-Card/Cards';
import MainList from '../C-list/MainList';

const Home = () => {
    return (
        <div>
            
            <NavBar/>       
            <Cards/> 
            <MainList/>
            </div>
    );
};

export default Home;