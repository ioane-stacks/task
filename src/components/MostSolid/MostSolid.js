import React, { useState } from "react";
import "./mostSolid.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { mostSolidData } from "./MostSolidData";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { useProps } from "../../App";
const MostSolid = () => {
  const { mostSolidId, setMostSolidId } = useContext(useProps)


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1075 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 750 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="most_solid">
      <h1>Most sold this week</h1>
      <p style={{ marginBottom: "5rem" }}>
        Top 10 most sold this week, next day delivery.
      </p>
      <Carousel responsive={responsive}>
        {mostSolidData.map((item) => {
          return (
            <div key={item.id} className="carousel_container">
              <div className="carousel_image_container">
                <img src={item.image} className="carousel_image" alt="" />
              </div>
              <div

                className="carousel_btn"
              >
                <Link
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                  to={`/mostsolidproduct/${item.id}`}
                >
                  View Option
                </Link>
              </div>
              <div>
                {" "}
                <p
                  style={{
                    color: "grey",
                    marginTop: "1rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.text}
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    marginBottom: "0.4rem",
                    width: "200px",
                  }}
                >
                  {item.description}
                </p>
                <p style={{ color: "green", marginBottom: "0.4rem" }}>
                  {item.delivery}
                </p>
                <p style={{ fontWeight: "bold" }}>€ {item.newPrice}</p>
                <p className="carousel_label">{item.label}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MostSolid;
