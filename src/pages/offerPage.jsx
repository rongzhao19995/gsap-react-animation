import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {gsap, CSSRulePlugin, Expo, Circ, Power4  } from "gsap/all";
gsap.registerPlugin(CSSRulePlugin);

import iconLeft from "../images/left.png";
import iconRight from "../images/right.png";
import offer1 from "../images/offer1.png";
import offer2 from "../images/offer2.png";
import offer3 from "../images/offer3.png";
import { useEffect } from "react";

const offerList = [
  { name: "item1", img: offer1, name:' responsive & multipurpose', desc: 'Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.', btnClass: 'white' },
  { name: "item2", img: offer2, name:' easy customization', desc: 'Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.', btnClass: 'blue' },
  { name: "item3", img: offer3, name:' awesome friendly support', desc: 'Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.', btnClass: 'white' }
];

// gsap variable
const t1 = gsap.timeline({ paused: true });
const animationSpeed = 0.75;
const animationTimingIn = Power4.In;
const animationTimingOut = Power4.Out;
const easeInOut = Circ.easeInOut;
const overlayCard = CSSRulePlugin.getRule('.offer-section .offer-listing .offer-opt:before');


const OfferSection = ({ img, name, desc, btnClass }) => {
    console.log(`btn-group pull-right ` + ( btnClass === 'white' ? 'white' : 'blue'));
  return (
    <Col xs={12} md={4} lg={4}>
        <div className="offer-opt">
            <div className={`offer-icon ` + ( btnClass === 'white' ? 'white' : 'blue')}>
                <img src={img} alt={name}/>
            </div>
            <div className="of-header">{name}</div>
            <div className="of-sub-header">{desc}</div>
            <div className="btn-section">
                <div className={`btn-readmore ` + ( btnClass === 'white' ? 'white' : 'blue')}>
                    <span>read more</span>
                </div>
            </div>
        </div>
    </Col>
  );
};

const listItems = offerList.map((obj) => (
  <OfferSection key={obj.name} img={obj.img} name={obj.name}  desc={obj.desc} btnClass={obj.btnClass} />
));

const offerPage = () => {

  useEffect(()=> {

    /// Animation on Entering
    t1.staggerFromTo('.offer-section .header', animationSpeed, { y: -100, opacity: 0, ease: animationTimingIn }, { y: 0, opacity: 1, ease: animationTimingOut }, 0.3)
    .from('.offer-section .sub-header', animationSpeed, { opacity: 0, ease: easeInOut }, 0.3)
    .to(overlayCard, animationSpeed, {cssRule:{width:0, opacity:1}, ease: animationTimingIn}, -0.5);

    t1.play();

  }, []);

  return (
    <section id="sec1">
      <div className="offer-section">
        <Container>
            <div className="header">
                <span className="icon-left"><img src={iconLeft} alt="iconLeft"/></span>
                what  we <span> offer</span>
                <span className="icon-right"><img src={iconRight} alt="iconRight"/></span>
            </div>
            <div className="sub-header">
                We offer our customers the best services & solutions, this is our main services list
            </div>
          <Row className="offer-listing">{listItems}</Row>
        </Container>
      </div>
      </section>
  );
};

export default offerPage;
