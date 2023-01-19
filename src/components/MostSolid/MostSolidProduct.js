import React, { useEffect, useState } from "react";
import "./mostSolid.css";
import { mostSolidData } from "./MostSolidData";
import { useContext } from "react";
import { useProps } from "../../App";
import { BsShareFill } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import xtra from "./MostSolidImages/icon.webp";
import { useParams } from "react-router-dom";
const MostSolidProduct = () => {
  // const { mostSolidId, setMostSolidId } = useContext(useProps);
  const [xtraVisibility, setXtraVisibility] = useState(false);
  const [data, setData] = useState([]);

  const params = useParams();

  useEffect(() => {
    setData(mostSolidData.find(d => d.id === Number(params.id)));
    console.log(mostSolidData.find(d => d.id === Number(params.id)).specification);
  }, [params]);


  return (
    <div className="solid_product">
      {data && (
        <>
          <div className="solid_product_container">
            <div className="solid_left">
              <img
                className="solid_img"
                src={data.image}
                alt=""
              />
            </div>

            <div className="solid_right">
              <h1 style={{ width: "90%" }}>
                {data.description}
              </h1>
              <div className="share_container">
                <p className="txt">{data.text}</p>
                <div className="share">
                  <div>
                    <BsShareFill className="share_icon" />
                  </div>{" "}
                  <div>Share</div>
                </div>
              </div>
              <p style={{ width: "80%" }}>
                {data.readMore}...{" "}
                <span className="read_more">Read More</span>
              </p>
              <p className="deliv">
                {" "}
                <BsCheck style={{ fontSize: "1.3rem" }} />
                {data.delivery}
              </p>
              <p style={{ fontWeight: "bold" }}>
                €{data.newPrice}
              </p>
              <div className="buttons">
                <div className="addCart">
                  <input id="number" type="number" />
                  <button className="add_btn">Add to cart</button>
                </div>
                <button className="buy_it_now_btn">Buy it now</button>
                <div className="buyNow">Buy now, pay later</div>
                <div className="hidden_text"></div>
                <div className="buyNowList">
                  <p>
                    <BsCheck style={{ fontSize: "1.5rem", color: "#64cd82" }} />
                    <span style={{ fontWeight: "bold" }}> Free shipping</span> on
                    all orders above 50,00
                  </p>
                  <p>
                    <BsCheck style={{ fontSize: "1.5rem", color: "#64cd82" }} />
                    No <span style={{ fontWeight: "bold" }}>
                      hassle returns,
                    </span>{" "}
                    30 days return
                  </p>
                  <p>
                    <BsCheck style={{ fontSize: "1.5rem", color: "#64cd82" }} />
                    <span style={{ fontWeight: "bold" }}>Next day</span>
                    delivery within your country
                  </p>
                  <p>
                    <BsCheck style={{ fontSize: "1.5rem", color: "#64cd82" }} />
                    <span style={{ fontWeight: "bold" }}>Largest stock</span>
                    in Europe and States
                  </p>
                  <p>
                    <BsCheck style={{ fontSize: "1.5rem", color: "#64cd82" }} />
                    Pay with <span style={{ fontWeight: "bold" }}>
                      Apple pay,
                    </span>{" "}
                    Paypal Express or creditcard
                  </p>
                </div>
              </div>
              <div className="line"></div>
              <div
                className="xtra"
                onClick={() => setXtraVisibility(!xtraVisibility)}
              >
                <div className="xtra_content">
                  <img src={xtra} alt="xtra_image" />

                  <div style={{ fontWeight: "bold" }}>Pay Whenever you want</div>
                </div>
                <RiArrowDropDownLine style={{ fontSize: "2rem" }} />{" "}
              </div>
              {xtraVisibility ? (
                <div
                  style={{ width: "65%", marginTop: "1rem" }}
                  className="hiddenText"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore modi ab voluptas unde quam quibusdam harum quidem ullam?
                  Recusandae, deserunt.
                </div>
              ) : null}
            </div>
          </div>
          <div className="description_specification">
            <div className="description">
              <h3>Description</h3>
              <p>{data.longDescription}</p>

              <p>
                This is a demonstration store, you can buy articles like this at{" "}
                <a style={{ color: 'rgb(147, 147, 52)', fontWeight: 'bold' }} href="https://www.oolabooshop.com/">oolabooshop.com</a>
              </p>
            </div>
            <div className="specification">

              {data.specification?.map((spec, index) => {
                return <div key={index}>
                  <p>{spec.title}</p>
                  <p>{spec.text}</p>
                </div>
              })}

            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MostSolidProduct;
