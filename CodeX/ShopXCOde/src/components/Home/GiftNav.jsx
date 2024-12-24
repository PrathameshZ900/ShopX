import React from "react";
import { useLocation } from "react-router-dom";
import NavMenu from "./NavMenu"; // Import the NavMenu component
import './GiftNav.css'; // Ensure this CSS file is created for styling

const GiftNav = ({ title , per}) => { // Accept the title as a prop
  const categories = [
    { id: 1, name: "Best Gifts", link: "/shop/gifts/best-gifts" },
    { id: 2, name: "Under $25", link: "/shop/gifts/under-25" },
    { id: 3, name: "Under $50", link: "/shop/gifts/under-50" },
    { id: 4, name: "Luxe & Designer", link: "/shop/gifts/luxe-designer" },
    { id: 5, name: "Gift Sets", link: "/shop/gifts/gift-sets" },
  ];

  return (
    <div className="gift-nav">
      <header className="nav-header">
        <h2 className="nav-title">{title || "Recently Viewed"}</h2> {/* Fallback to "Recently Viewed" */}
        <a className="view-all" href="/shop/gifts/best-gifts?origin=recs-holidayrackbestgiftssub-1">View All</a>
      </header>
      <hr />
        
      {/* Conditional rendering of NavMenu based on the per prop */}
      {per === "true" && <NavMenu categories={categories} />}
            
  
      
    </div>
  );
};

export default GiftNav;
