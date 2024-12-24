import React from "react";
import './Add.css';

const Board = ({ imageSrc, altText, link, buttonText }) => {
  const imageSource = imageSrc || "https://n.nordstrommedia.com/it/52c52d03-53c0-4a82-8c30-e5dfb6677c89.png?h=200&w=1608";
  const altDescription = altText || "Limited-time sale. Prices drop on brands you love. Grab ‘em quick.";
  const linkUrl = link || "/clearance/limited-time-deals";
  const buttonLabel = buttonText || "Shop Limited-Time Sales"; // Default button text

  return (
    <section className="board-container">
      <div className="image-container">
        <a
          href={linkUrl}
          className="board-link"
          title={altDescription}
        >
          <div className="image-wrapper">
            <img
              className="board-image"
              loading="eager"
              alt={altDescription}
              src={imageSource}
            />
          </div>
        </a>
      </div>

      <div className="cta-container">
        <div className="cta-text">
          <ul className="cta-list">
            <li className="cta-item">
              <a
                className="cta-link"
                title={buttonLabel}
                href={linkUrl}
                aria-label={buttonLabel}
              >
                <span className="cta-text-span">{buttonLabel}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Board;