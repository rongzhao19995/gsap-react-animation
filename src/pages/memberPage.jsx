import React, {useRef} from "react";
import { useIntersection } from "react-use";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {gsap, Expo, Circ, Power4  } from "gsap";

import u1 from "../images/avatar1.webp";
import u2 from "../images/avatar2.webp";
import u3 from "../images/avatar3.webp";
import u4 from "../images/avatar4.webp";

import gc1 from "../images/groupContact.png";


const memberList = [
  { key: "item1", img: u1, name: "alexis simpson", pos:'CEO developer' , phone: '+1 911 (77) 222-1111', email: 'simpson@unique.com' },
  { key: "item2", img: u2, name: "steven cole", pos:'User Interface Designer' , phone: '+1 911 (77) 222-1111', email: 'steven@unique.com' },
  { key: "item3", img: u3, name: "Frank piener", pos:'Sales Manager' , phone: '+1 911 (77) 222-1111', email: 'piener@unique.com' },
  { key: "item4", img: u4, name: "ashley lennon", pos:'IT Specialist' , phone: '+1 911 (77) 222-1111', email: 'lennon@unique.com' },
];

const CardSection = ({ img, name, pos, phone, email }) => {
  return (
    <Col xs={11} md={5} lg={3}>
      <Card className="member-card member-fadeIn">
        <Card.Img variant="top" src={img}  alt={pos}/>
        <div className="overlay-info">
          <img src={gc1} alt=""/>
        </div>
        <Card.Body>
          <Button className="mb-name">{name}</Button>
          <div className="card-text">
            <div className="mb-pos">
              {pos}
              <span className="seperate-line"></span>
            </div>

            <div className="mb-phone">
              <span></span>
              {phone}
            </div>
            <div className="mb-email">
              <span></span>
              {email}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const listItems = memberList.map((obj) => (
  <CardSection key={obj.key} img={obj.img} name={obj.name} pos={obj.pos}  phone={obj.phone} email={obj.email} />
));

const memberPage = () => {

  // gsap variable
  const animationSpeed = 0.75;
  const animationTimingIn = Power4.In;
  const animationTimingOut = Power4.Out;
  const easeInOut = Circ.easeInOut;
    
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  // Animation for fading in
  const fadeIn = element => {
    gsap.to(element, animationSpeed, { opacity: 1, y: 20, ease: animationTimingOut, stagger: { amount: 0.8 } }) };

  // Animation for fading out
  const fadeOut = element => {
    gsap.to(element, animationSpeed, { opacity: 0, y: -20, ease: animationTimingOut});
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio > 0.1 ? fadeIn(".member-fadeIn") : fadeOut(".member-fadeIn");

  return (
    <section  id="sec4" ref={sectionRef}>
      <div className="members-section">
        <Container>
          <Row className="members-listing">{listItems}</Row>
          <Row className="view-btn member-fadeIn">
              <div className="btn-section">
                  view all works
              </div>
          </Row>
        </Container>
      </div>
      </section>
  );
};

export default memberPage;
