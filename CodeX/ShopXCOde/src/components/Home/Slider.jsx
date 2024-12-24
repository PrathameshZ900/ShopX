
import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const slides = [
    "https://www.edigitalagency.com.au/wp-content/uploads/Tommy-Hilfiger-boxing-day-sale-Australia-banner-image-900x450.png",
    "https://img-cdn.thepublive.com/fit-in/1200x675/filters:format(webp)/afaqs/media/post_attachments/c7308d26ee2baf2bbe58ecca47d2740b7075c3e9cde4e8c86f38881c6aa65318.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bac923101327009.5f1c3b84aaaf0.jpg",
    "https://i.pinimg.com/originals/56/90/33/569033df05501cd3515d3bc1de53a233.jpg",
    "https://www.marketing91.com/wp-content/uploads/2019/04/Marketing-Strategy-of-Tommy-Hillfiger-4.jpg",
  ];

  const totalPages = slides.length; // Total number of slides
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the active slide
  const [isAnimating, setIsAnimating] = useState(false); // Prevents rapid navigation

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalPages - 1 : prevIndex - 1
      );
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 5 seconds

    const timer = setTimeout(() => setIsAnimating(false), 500); // Matches CSS transition time

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <div className="slider">
      {/* Slider Track */}
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="navigation">
        <button className="arrow prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="arrow next" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
