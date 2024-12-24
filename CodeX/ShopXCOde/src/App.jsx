import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Welcome from "./components/Home/Welcome";
import Board from "./components/Home/Add"; // Assuming this is the correct path
import Slider from "./components/Home/Slider";
import ProductSlider from "./components/Home/ProductSlider";
import EventBoard from "./components/Home/EventBoard";
import GiftNav from "./components/Home/GiftNav";
import products1 from "./components/Home/data";
import FeaturedProducts from "./components/Home/FeaturedProducts";
import Carousel from "./components/Home/Carousel";
import Handbags from "./components/Home/Handbags";
import UGG from "./components/Home/UGG";
import Score from "./components/Home/Score";
import Review from "./components/Home/Review";
import EmailSubscription from "./components/Home/EmailSubscription";
import Footer from "./components/Home/Footer";








const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(""); // Corrected here

  // Check login status and user info from localStorage on component mount
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUserId = localStorage.getItem("loggedInUserId"); // Corrected here

    if (loggedInUserId) {
      const loggedInUser = users.find(user => user.id === loggedInUserId);
      if (loggedInUser) {
        setIsLoggedIn(true);
        setUserName(loggedInUser.name); // Corrected here
      }
    }
  }, []);

  // Handle logout by clearing login state and localStorage
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName(""); // Corrected here
    localStorage.removeItem("loggedInUserId"); // Corrected here
  };

 

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} userName={userName} handleLogout={handleLogout} />

      <Routes>
        <Route path="/" element={
          <>
            <Welcome userName={userName} />
            <Board
              imageSrc="https://n.nordstrommedia.com/it/f2b3fc2f-ae41-4db3-be1a-db877d1751b5.png?h=200&amp;w=1608"
              altText="New Sale Image"
              link="/new-deals"
              buttonText="See Details" 
            />
            <Slider />
            <Board
              imageSrc="https://n.nordstrommedia.com/it/52c52d03-53c0-4a82-8c30-e5dfb6677c89.png?h=200&amp;w=1608"
              altText="New Sale Image"
              link="/new-deals"
              buttonText="Shop Gifts" 
            />
            <GiftNav  per="true"/>
           
            <ProductSlider products={products1} />
            <Board
              imageSrc="https://n.nordstrommedia.com/it/3419d176-3b28-4fbf-9dd8-49e292d6916d.png?h=200&amp;w=1608"
              altText="New Sale Image"
              link="/new-deals"
              buttonText="All Flash Events" 
            />
            <EventBoard />
            <Board
              imageSrc="https://n.nordstrommedia.com/it/05fa468c-4c3c-4d6d-838c-69a5a34f3009.png?h=200&amp;w=1608"
              altText="New Sale Image"
              link="/new-deals"
              buttonText="Learn More" 
            />

            <GiftNav title="Stocking Stuffers Under $50" per="true" />
           
            <ProductSlider />

            <Slider />

            <FeaturedProducts />
            <Carousel/>
            <Handbags/>
            <UGG  imgSrc="https://n.nordstrommedia.com/it/3537dd46-b4fe-4695-8ae3-dfeda93df89b.jpeg?h=720&amp;w=1608" />
            <Score/>
            <Review/>
            <GiftNav title="Trending Now"  />
            <ProductSlider />


            <Board
              imageSrc="https://n.nordstrommedia.com/id/9124cf9a-7133-4e76-85dc-d7052869884a.png?h=179&amp;w=1608"
              altText="BE FIRST TO KNOW"
              link="/new-deals"
              buttonText="Sign Up For Email" 
            />

            <EmailSubscription/>

            <Footer />

          </>
        } />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
