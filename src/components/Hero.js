import React from 'react';
import '../assets/css/styles.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-4 fw-bold">Are you starving?</h1>
                        <p className="lead">Within a few clicks, find meals that are accessible near you</p>
                        <div className="search-box shadow-lg">
                            <div className="delivery-options">
                                <button className="btn btn-warning active"><i className="fas fa-motorcycle"></i> Delivery</button>
                                <button className="btn btn-light"><i className="fas fa-shopping-bag"></i> Pickup</button>
                            </div>
                            <div className="address-input">
                                <input type="text" placeholder="Enter Your Address" />
                                <button className="btn btn-danger"><i className="fas fa-search"></i> Find Food</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="./assets/images/banner2.png" alt="Banner" className="banner-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;