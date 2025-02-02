import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FoodItems from './components/FoodItems';
import './assets/css/styles.css';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <FoodItems />
        </div>
    );
}

export default App;