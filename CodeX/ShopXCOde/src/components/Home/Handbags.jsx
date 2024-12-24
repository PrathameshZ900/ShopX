import React from 'react';
import './Handbags.css';

const Handbags = () => {
    const handbags = [
        {
            id: 1,
            title: "Mini Brixton Crystal Shoulder Bag",
            imgSrc: "https://n.nordstrommedia.com/it/60e9bf7d-fe21-4b36-8293-aafe53bb5cff.jpeg",
            price: "$99.97",
            discount: "48% off",
            comparableValue: "$195.00",
            brand: "Kurt Geiger London",
            rating: 5,
            link: "/s/kurt-geiger-london-mini-brixton-crystal-shoulder-bagbr/7958767"
        },
        {
            id: 2,
            title: "Crossbody Bag",
            imgSrc: "https://n.nordstrommedia.com/it/0e420792-3a8f-44a4-9c41-8753ecd5bd03.jpeg",
            price: "$99.97",
            discount: "48% off",
            comparableValue: "$195.00",
            brand: "Marc Jacobs",
            rating: 4.6,
            link: "/s/marc-jacobs-crossbody-bag/6063148"
        },
        {
            id: 3,
            title: "Small Leather Crossbody Bag",
            imgSrc: "https://n.nordstrommedia.com/it/4c3c85a5-d4fa-4e4b-b29e-0d069b2cfa5c.jpeg",
            price: "$69.97",
            discount: "50% off",
            comparableValue: "$140.00",
            brand: "Marc Jacobs",
            rating: 3.9,
            link: "/s/marc-jacobs-small-leather-crossbody-bag/8027512"
        },
        {
            id: 4,
            title: "Union Jack Recycled Camera Crossbody Bag",
            imgSrc: "https://n.nordstrommedia.com/it/db28f51f-e4a3-469a-9daa-3b1689adfc62.jpeg",
            price: "$69.97",
            discount: "48% off",
            comparableValue: "$135.00",
            brand: "Kurt Geiger London",
            rating: 5,
            link: "/s/kurt-geiger-london-union-jack-recycled-camera-crossbody-bag/7997427"
        },
    ];

    return (
        <div className="handbags-container">
 
            <h2>Handbags Under $100</h2>
            <ul className="handbags-list">
            <div className="header-image">
                <img 
                    loading="lazy" 
                    alt="Handbags under $100" 
                    src="https://n.nordstrommedia.com/it/9f7e3bd3-03fd-4416-8b74-83ea5aebee50.png?h=429&amp;w=279" 
                />
            </div>
                {handbags.map(handbag => (
                    <li key={handbag.id} className="handbag-item">
                        <img src={handbag.imgSrc} alt={handbag.title} />
                        <h3>{handbag.title}</h3>
                        <p className="brand">{handbag.brand}</p>
                        <p className="price">{handbag.price} <span className="discount">({handbag.discount})</span></p>
                        <p className="comparable-value">Comparable value: {handbag.comparableValue}</p>
                        <p className="rating">Rating: {handbag.rating} out of 5</p>
                        <a href={handbag.link} className="view-product">View Product</a>
                    </li>
                ))}
            </ul>
            <div className="shop-all">
                <a href="/shop/women/handbags/under-100?campaign=handbags100&shop-all=1">Shop All</a>
            </div>
        </div>
    );
};

export default Handbags;