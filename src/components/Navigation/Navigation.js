import React from "react";
import { useState } from "react";
import { Data } from "./Data";
import "./navigation.css";
import NavItems from "./NavItems";
import SubMenu from "./SubMenu";

const Navigation = () => {
  const [choosenIndex, setChoosenIndex] = useState(null);
  return (
    <div className="navigation">
      <div className="navigation_container">
        <div>
          <NavItems setChoosenIndex={setChoosenIndex}  />
        </div>
        <div className="sale">Sale</div>
        <div>Stock sale 1/2 price</div>
      </div>
      {choosenIndex ? <SubMenu choosenIndex={choosenIndex} setChoosenIndex={setChoosenIndex}/> : null}
    </div>
  );
};

export default Navigation;
