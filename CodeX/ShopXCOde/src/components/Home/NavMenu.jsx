import React from "react";
import './NavMenu.css'; // Ensure this CSS file is created for styling

const NavMenu = ({ categories }) => {
  return (
  <>


    <nav className="nav-menu">
          <ul className="nav-list">
            {categories.map(category => (
              <li key={category.id} className="nav-item" tabIndex="0">
                <a href={category.link} className="nav-link">{category.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* <hr id="hr" /> */}

  </>

    
  );
};

export default NavMenu;