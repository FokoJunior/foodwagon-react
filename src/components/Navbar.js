import React from 'react';
import '../assets/css/styles.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light px-4 shadow-sm">
            <a className="navbar-brand text-warning fw-bold" href="#"><i className="fas fa-utensils"></i> FoodWagon</a>
            <div>
                <a href="#" className="btn text-black me-2"><i className="fas fa-map-marker-alt"></i> Deliver to: Current Location</a>
                <a href="#" className="btn text-warning me-2"><i className="fas fa-search"></i> Search Food</a>
                <a href="#" className="btn btn-ligth text-warning login"><i className="fas fa-user"></i> Login</a>
            </div>
        </nav>
    );
};

export default Navbar; 