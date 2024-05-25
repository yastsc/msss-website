import React from 'react';
import HomeFeaturedNews from './HomeFeaturedNews';
import HomeMedia from "./HomeMedia";
import "./home.css";
import MSSSHomepgPic from "../images/img-1.jpg"
import HomeEvents from './HomeEvents';
 
 
const Home = () => {
  return (
    <div
    style={{
      // display: 'flex',
      // justifyContent: 'centre',
      // alignItems: 'centre',
      // height: "100vh",
      // padding: "1rem" // problem: a bit hardcoded, else the divs overlap
    }}>
    <img src={MSSSHomepgPic} className ="banner" alt="pic" length = "0" />
    <div >
      <div> <HomeEvents /> </div>
      <div> <HomeFeaturedNews /> </div>
      <div> <HomeMedia /> </div>
    </div>
  </div>
  );
  };

  export default Home;
