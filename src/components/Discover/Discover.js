import React from "react";
import Discover1 from "../Discover/DiscoverImages/discover1.webp";
import Discover2 from "../Discover/DiscoverImages/discover2.webp";
import Discover3 from "../Discover/DiscoverImages/discover3.webp";
import "./discover.css";
const Discover = () => {
  return (
    <div className="discover_container" style={{ marginTop: "1rem" }}>
      <div className="discover1">
        <img className="discover_image" src={Discover1} alt="" />
        <div className="discover_overlay1">
          <h2>
            Discover the best <br />
            weekly offers
          </h2>
          <p> section of only the best brand</p>
          <button onClick={()=>{console.log('hello there')}} className="discover_btn">Shop sale</button>
        </div>
      </div>

      <div className="discover">
        <img className="discover_image" src={Discover2} alt="" />
        <div className="discover_overlay">
          <h2>Electronics</h2>
          <p style={{fontWeight:'bold'}}>{`Discover now >`}</p>
        </div>
      </div>
      <div className="discover">
        <img className="discover_image" src={Discover3} alt="" />
        <div className="discover_overlay">
          <h2>Electronics</h2>
          <p style={{fontWeight:'bold'}}>{`Discover now >`}</p>
        </div>
      </div>
   
    </div>
  );
};

export default Discover;
