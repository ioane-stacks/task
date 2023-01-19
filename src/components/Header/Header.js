import React from "react";
import "./header.css";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { BsInstagram, BsPersonCircle, BsSearch } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
const Header = () => {
  const handleSubmit = () => { };
  return (
    <div className="header">
      <div className="header_left">
        <RxHamburgerMenu className="header_icon" />
        <div className="tra"><Link style={{ textDecoration: "none", color: "white" }} to="/">Xtra</Link></div>
        <button className="header_btn">View catalog</button>
      </div>
      <div className="header_center">
        <div className="x_tra" >Xtra</div>
        <form className="form" onClick={handleSubmit}>
          <input
            className="my_input"
            type="text"
            placeholder="what r u looking for"
            required
          />
          <button type="submit" className="searchIcon">
            <BsSearch />
          </button>
        </form>
      </div>
      <div className="header_right">
        <div className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="insta">
          <BsInstagram />
          <span>#Xtra insta</span>
          <RiArrowDropDownLine style={{ fontSize: "2rem" }} />
        </div>
        <div className="person_icon">
          <BsPersonCircle />
          <RiArrowDropDownLine style={{ fontSize: "2rem" }} />
        </div>
        <div className="cart">
          <AiOutlineShoppingCart />
          <div className="amount">0</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
