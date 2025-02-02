import React from 'react';
import FoodItem from './FoodItem';
import '../assets/css/styles.css';

const FoodItems = () => {
    const foodImages = [
        { src: "../assets/images/image1.png", alt: "Food 1" },
        { src: "../assets/images/image2.png", alt: "Food 2" },
        { src: "../assets/images/image3.png", alt: "Food 3" },
        { src: "../assets/images/image.png", alt: "Food 4" }
    ];
 
    return (
        <section className="container py-5">
            <div className="row g-4">
                {foodImages.map((food, index) => (
                    <div className="col-md-3" key={index}>
                        <FoodItem image={food.src} alt={food.alt} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FoodItems;