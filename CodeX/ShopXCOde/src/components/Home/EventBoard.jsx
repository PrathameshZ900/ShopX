import React, { useState, useEffect } from "react";
import "./EventBoard.css";

const events = [
  {
    id: 1,
    title: "L'AGENCE Up to 65% Off",
    image: "https://n.nordstrommedia.com/it/4e417513-a8ea-433f-8dc7-ce4874b0ecf5.jpeg?h=1224&w=1224",
    link: "/events/1019024",
    countdown: "Event ends in 2 days, 5 hours, and 9 minutes",
  },
  {
    id: 2,
    title: "Men's Resort Looks Up to 50% Off",
    image: "https://n.nordstrommedia.com/it/a547c4ea-09d3-4b8c-a0b7-86c2453b4386.jpeg?h=1224&w=1224",
    link: "/events/1019118",
    countdown: "Event ends in 2 days, 5 hours, and 9 minutes",
  },
  {
    id: 3,
    title: "Resort-Ready Luggage & Travel Bags",
    image: "https://n.nordstrommedia.com/it/83d2c46e-b28d-46f6-a517-43ad99d31e63.jpeg?h=1224&w=1224",
    link: "/events/1019045",
    countdown: "Event ends in 2 days, 5 hours, and 9 minutes",
  },
  {
    id: 4,
    title: "Women's Resort Looks Up to 60% Off",
    image: "https://n.nordstrommedia.com/it/010cbcaa-f4d2-4371-9825-dbb101835f86.jpeg?h=1224&w=1224",
    link: "/events/1019026",
    countdown: "Event ends in 2 days, 5 hours, and 9 minutes",
  },
  {
    id: 5,
    title: "Madewell & More Fashion Jewelry from $15",
    image: "https://n.nordstrommedia.com/it/8f7c448b-982a-4ef9-9314-d777847a0af0.jpeg?h=1224&w=1224",
    link: "/events/1019122",
    countdown: "Event ends in 2 days, 5 hours, and 9 minutes",
  },
  {
    id: 6,
    title: "Kids' Resort Looks Up to 60% Off",
    image: "https://n.nordstrommedia.com/it/4472db8d-3804-49e2-865e-01b51dd1f3b1.jpeg?h=1224&w=1224",
    link: "/events/1018967",
    countdown: "Event ends in 2 days, 5 hours, and 9 minutes",
  },
  {
    id: 7,
    title: "Men's Top Picks Up to 65% Off",
    image: "https://n.nordstrommedia.com/it/db973e98-85e1-4cbd-aeae-c790457b8638.jpeg?h=1224&w=1224",
    link: "/events/1018958",
    countdown: "Event ends in 2 days, 5 hours, and 9 minutes",
  },
  {
    id: 8,
    title: "Brooks Brothers Up to 50% Off",
    image: "https://n.nordstrommedia.com/it/33317808-6d0d-4fc9-990c-ead632d48d6e.jpeg?h=1224&w=1224",
    link: "/events/1018957",
    countdown: "Event ends in 2 days, 5 hours, and 9 minutes",
  },
  {
    id: 9,
    title: "UGG® for the Family",
    image: "https://n.nordstrommedia.com/it/24a68a7e-ee2f-42cf-826e-e2cd813f32e6.jpeg?h=1224&w=1224",
    link: "/events/1018936",
    countdown: "Event ends in 1 day, 5 hours, and 9 minutes",
  },
];

const EventBoard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const [fade, setFade] = useState(false);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(events.length / itemsPerPage) - 1) {
      setFade(true);
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const currentEvents = events.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextPage();
    }, 10000); // Change page every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentPage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(false);
    }, 500); // Duration of fade effect

    return () => clearTimeout(timer);
  }, [fade]);

  return (
    <div>
      <ul className={`event-board ${fade ? 'fade' : ''}`}>
        {currentEvents.map((event) => (
          <li key={event.id} className="event-item">
            <div className="event-card">
              <a href={event.link}>
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-content">
                  <div className="event-title">
                    <strong>{event.title}</strong>
                  </div>
                  <div className="event-countdown">{event.countdown}</div>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventBoard;