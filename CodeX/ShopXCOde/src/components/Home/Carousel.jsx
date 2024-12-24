import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import the CSS file

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State to track hover status
  const slides = [
    {
      id: 1,
      image: "https://n.nordstrommedia.com/it/12aac345-f1ff-41cb-9a96-7514034d15c7.png?h=200&w=1608",
      title: "Find Your Rack",
      link: "/promo/store-details",
    },
    {
      id: 2,
      image: "https://n.nordstrommedia.com/it/f2b3fc2f-ae41-4db3-be1a-db877d1751b5.png?h=200&amp;w=1608",
      title: "Find Your Style",
      link: "/promo/store-details",
    },
    {
      id: 3,
      image: "https://n.nordstrommedia.com/it/52c52d03-53c0-4a82-8c30-e5dfb6677c89.png?h=200&amp;w=1608",
      title: "Discover New Arrivals",
      link: "/promo/store-details",
    },
    {
      id: 4,
      image: "https://n.nordstrommedia.com/it/3419d176-3b28-4fbf-9dd8-49e292d6916d.png?h=200&amp;w=1608",
      title: "Shop Gift Cards",
      link: "https://rack.giftcard.nordstrom.com/store/recipient",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        handleNext();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isHovered, currentSlide]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsHovered(true)} // Pause on hover
      onMouseLeave={() => setIsHovered(false)} // Resume on leave
      role="region"
      aria-live="polite"
      aria-label="Image carousel"
    >
      <button className="nav-button prev" onClick={handlePrev} aria-label="Previous slide">
        &#10094; {/* Left arrow */}
      </button>
      <div className="carousel-content">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
            aria-hidden={index !== currentSlide} // Hide non-active slides for accessibility
          >
            <a href={slide.link} className="slide-link" title={slide.title}>
              <img className="slide-image" src={slide.image} alt={slide.title} loading="lazy" />
            </a>
            <div className="overlay">
              <a href={slide.link} className="overlay-link">{slide.title}</a>
            </div>
          </div>
        ))}
      </div>
      <button className="nav-button next" onClick={handleNext} aria-label="Next slide">
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Carousel;