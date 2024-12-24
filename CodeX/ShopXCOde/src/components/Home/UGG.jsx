import React from 'react';
import './UGG.css';

const UGG = ({ imgSrc }) => {
    return (
        <div className="ugg-container" id="ugg-container">
            <a href="/shop/brands-shop/ugg-shop?campaign=allugg" className="ugg-link" title="UGG® for the Family">
                <div className="ugg-image-wrapper" id="ugg-image-wrapper">
                    <img 
                        className="ugg-image" 
                        loading="lazy" 
                        alt="UGG® for the family." 
                        src={imgSrc} 
                    />
                </div>
            </a>
            <div className="ugg-overlay" id="ugg-overlay">
                <ul className="ugg-list" id="ugg-list">
                    <li className="ugg-item" id="ugg-item">
                        <a 
                            className="ugg-item-link" 
                            title="UGG® for the Family" 
                            aria-label="UGG® for the Family" 
                            href="/shop/brands-shop/ugg-shop?campaign=allugg"
                        >
                            <span className="ugg-item-text" id="ugg-item-text">UGG® for the Family</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UGG;