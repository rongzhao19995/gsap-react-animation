import React, { useState, useEffect } from "react";
import ScrollMenu from 'react-horizontal-scrolling-menu';

import partner1 from "../images/partner1.png";
import partner2 from "../images/partner2.png";
import partner3 from "../images/partner3-1.png";
import partner4 from "../images/partner4.png";
import iconLeft from "../images/icon-left.png";
import iconRight from "../images/icon-right.png";


const MenuItem = ({ text, selected, img }) => {
  return (
    <div className={`menu-item ${selected ? "active" : ""}`}>
      <div className="img-wrapper">
        <img src={img} alt={text} />
      </div>
    </div>
  );
};

export const Menu = (list, selected) =>
  list.map((el) => {
    return (
      <MenuItem text={el.name} key={el.name} selected={selected} img={el.img} />
    );
  });

const Arrow = ({ text, icon, className }) => {
  return <div className={className}><img src={icon} alt={text}/></div>;
};

const ArrowLeft = Arrow({ text: "<", icon: iconLeft, className: "left-btn-wrapper" });
const ArrowRight = Arrow({ text: ">", icon: iconRight, className: "right-btn-wrapper" });

const HorizontalScrolling = () => {
  const list = [
    { name: "item1", img: partner1 },
    { name: "item2", img: partner2 },
    { name: "item3", img: partner3 },
    { name: "item4", img: partner4 },
    { name: "item5", img: partner1 },
    { name: "item6", img: partner2 },
    { name: "item7", img: partner3 },
    { name: "item8", img: partner4 }
  ];

  const [selected, setSelected] = useState("");

  const menuItems = Menu(list, selected);
  const menu = menuItems;
  const alignCenter = true;
  const onSelect = (key) => {
    setSelected({ selected: key });
    console.log(selected);
  };

  return (
    <React.Fragment>
      <ScrollMenu
        data={menu}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selected}
        onSelect={onSelect}
        alignCenter={alignCenter}
      />
    </React.Fragment>
  );
};

export default HorizontalScrolling;
