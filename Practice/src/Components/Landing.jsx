import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';
import Navigation from './Navigation';
import Tasks from './Tasks';
import User from './User';
import AddTask from './AddTask';

const Landing = () => {
    return (
        <div>
            <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="LoginPage" element={<LoginPage/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="Tasks" element={<Tasks/>}/>
                <Route path="User" element={<User/>}/>
                <Route path="Tasks/AddTask" element={<AddTask/>}/>
            </Routes>
            </BrowserRouter>
            
        </div>
    );
};

export default Landing;