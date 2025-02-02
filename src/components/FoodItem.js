import React from 'react';
import '../assets/css/styles.css';

const FoodItem = ({ image, alt }) => {
    return (
        <div className="food-item shadow-sm">
            <img src={image} className="food-img" alt={alt} />
        </div>
    );
};

export default FoodItem;