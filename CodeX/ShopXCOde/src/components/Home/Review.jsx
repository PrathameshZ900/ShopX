import React from 'react';
import './Review.css';

const Review = () => {
    const items = [
        {
            id: 1,
            imgSrc: "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzM0NjI4Mzc4LjIwNTAwNzM1MDQ2My5qcGVn.jpg?w=400&h=400&fit=cover",
            alt: "Holiday outfit inspo ♥️ an all black outfit with a pop of red from nordstromrack",
        },
        {
            id: 2,
            imgSrc: "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzM0NTQ1MzY4Ljg4MTkzMTgzODc3LmpwZWc=.jpg?w=400&h=400&fit=cover",
            alt: "Outfit check: Holiday Edition 🎄🎁",
        },
        {
            id: 3,
            imgSrc: "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzM0NjI4NDgzLjUwNzAwMzgzOTkwLmpwZWc=.jpg?w=640&h=640&fit=cover",
            alt: "Love a good sparkle moment, and that long sequin skirts are running wild this holiday season!✨✨",
        },
        {
            id: 4,
            imgSrc: "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzM0NjA4NTc5LjI0MzE1MTczODg4Ni5qcGVn.jpg?w=640&h=640&fit=cover",
            alt: "When the outfit spoke, and the room listened ✨💫",
        },
        {
            id: 5,
            imgSrc: "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzMwMDk1NjgwLjg3ODc2NjMzNDcyMS5qcGVn.jpg?w=400&h=400&fit=cover",
            alt: "These •Open Edit• snakeskin boots from nordstromrack will be the star of any outfit!🤩🤍",
        },
        {
            id: 6,
            imgSrc: "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzM0NjI4NDgzLjUwNzAwMzgzOTkwLmpwZWc=.jpg?w=640&h=640&fit=cover",
            alt: "Love a good sparkle moment, and that long sequin skirts are running wild this holiday season!✨✨",
        },

    ];

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {items.map(item => (
                    <div key={item.id} className="carousel-item">
                        <div className="aspect-ratio-box">
                            <div className="js-click-image ls-carousel-photo cta-shop-now">
                                <button className="media-action" aria-label="Open media">Shop Now</button>
                                <figure>
                                    <img src={item.imgSrc} alt={item.alt} />
                                </figure>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;