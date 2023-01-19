import React from "react";
import { Data } from "./Data";
import {useState} from 'react'
const NavItems = ({setChoosenIndex}) => {


  return (
    <>

      <ul className="navItems">
        {Data.map((element, index) => {
          return <li key={index} onMouseEnter={()=>setChoosenIndex(element.id)}  >{element.name}</li>;
        })}
      </ul>
    </>
  );
};
// onMouseLeave={() => setChoosenIndex(null)}
export default NavItems;
