import React, {useRef, useEffect} from "react";
import { useIntersection } from "react-use";
import {gsap, Expo, Circ, Power4  } from "gsap";
import { Container, Row, Col } from "react-bootstrap";

import f1 from "../images/item1.png";
import f2 from "../images/item2.png";
import f3 from "../images/item3.png";
import f4 from "../images/item4.png";
import f5 from "../images/item5.png";
import f6 from "../images/item6.png";

// gsap variable
const animationSpeed = 0.75;
const animationTimingIn = Power4.In;
const animationTimingOut = Power4.Out;
const easeInOut = Circ.easeInOut;

const cardList = [
  {
    name: "item1",
    img: f1,
    header: "Responsive & Multipurpose",
    sub_header: "Desktops, Tablet & Phones",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "item2",
    img: f2,
    header: "Easy Customize",
    sub_header: " One Click Demo Content Installation",
    desc:
      "Curabitur blandit justo nec sapien vestibulum imperdiet sit amet dignissim elit.",
  },
  {
    name: "item3",
    img: f3,
    header: "Unlimited Features",
    sub_header: "Shortcodes, Typograhpy & Diferent Layout",
    desc: "Fusce in quam id ante pulvinar posuere a id lorem.",
  },
  {
    name: "item4",
    img: f4,
    header: "Clean & Modular Coding",
    sub_header: "Valid & Well-Commented Coding",
    desc: "Duis gravida quam in tortor semper, vel commodo ex posuere.",
  },
  {
    name: "item5",
    img: f5,
    header: "Best E-Commerce Solutions",
    sub_header: "WooCommerce Fully Intergration",
    desc: "Proin scelerisque massa quis rhoncus sollicitudin.",
  },
  {
    name: "item6",
    img: f6,
    header: "Awesome Friendly Support",
    sub_header: "Free Lifetime Support & Updates",
    desc: "onec eget purus tristique, euismod turpis at, faucibus diam.",
  },
];

const Card = ({ name, img, header, sub_header, desc }) => {

  return (
    <Col xs={12} md={5} lg={4}>
      <div className="features-card">
        <div className="content-left">
          <img src={img} alt={name}></img>
        </div>
        <div className="content-right">
        <div className="cont-header-line">
          <div className="cont-header contTA">{header}</div>
        </div>
        <div className="cont-sub-header-line">
          <div className="cont-sub-header contTA">{sub_header}</div>
        </div>
        <div className="cont-desc-line">
          <div className="cont-desc contTA">{desc}</div>
        </div>
        
        </div>
      </div>
    </Col>
  );
};

const listItems = cardList.map((obj) => (
  <Card
    key={obj.name}
    name={obj.name}
    img={obj.img}
    header={obj.header}
    sub_header={obj.sub_header}
    desc={obj.desc}
  />
));

const featuresPage = () => {

  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  // Animation for fading in
  const fadeIn = element => {
    gsap.to('.features-card', animationSpeed, { opacity: 1, y: -20, ease: animationTimingIn, stagger: { amount: 0.8 }, delay: .5 })
    gsap.to('.contTA', animationSpeed, { opacity: 1, y: 0, ease: animationTimingIn, stagger: { amount: 0.8 }, delay: .5 });
  };

  // Animation for fading out
  const fadeOut = element => {
    gsap.to('.features-card', animationSpeed, { opacity: 0, y: 20, ease: animationTimingOut});
    gsap.to('.contTA', animationSpeed, { opacity: 0, y: 20, ease: animationTimingOut}, -0.2);
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio > 0.1 ? fadeIn() : fadeOut();
  
  return (
    <section id="sec3" ref={sectionRef}>
      <div className="features-section">
        <Container>
          <Row className="features-listing">{listItems}</Row>
        </Container>
      </div>
    </section>
  );
};

export default featuresPage;
