import React, { useState } from "react";
import { Data } from "./Data";
const SubMenu = ({ choosenIndex, setChoosenIndex }) => {
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="subMenu"
      onMouseLeave={() => setChoosenIndex(null)}
    >
      {Data.map((item) => {
        if (item.id === choosenIndex) {
          return (
            <div
              className="each_child_container"
              style={
                choosenIndex === 1
                  ? gridStyle.fiveColumn
                  
                  : gridStyle.fourColumn
              }
            >
              {item.subMenu?.map((deep, index) => {
                return (
                  <div key={index} className="each_child">
                    <p style={{ fontWeight: "bold" }}>{deep?.subTitle}</p>
                    <div>
                      {deep.subList.map((e, i) => {
                        return <p key={i}>{e.itemName}</p>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

const gridStyle = {
  fiveColumn: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
  },
  fourColumn: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",

  },

};

export default SubMenu;
