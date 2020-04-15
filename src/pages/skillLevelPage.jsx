import React, {useRef} from "react";
import { useIntersection } from "react-use";
import {gsap, Expo, Circ, Power4  } from "gsap";
import { Container, Row, Col } from "react-bootstrap";
import iconLeft from "../images/left.png";
import iconRight from "../images/right.png";

const skillList = [
  { name: "item1", per: 75, header: "WEB Design" },
  { name: "item2", per: 92, header: "Web Development" },
  { name: "item3", per: 68, header: "Speed Optimization" },
  { name: "item4", per: 100, header: "Customer Support" },
  { name: "item5", per: 83, header: "Marketing" },
  { name: "item6", per: 60, header: "Advertisement" },
];

const ProgressChart = ({ per, header }) => {
    console.log(`c100 p${per} t-blue`);

  return (
    <Col xs={12} md={5} lg={2}>
      <div className="custom-circle-section">
        <div className="custom-bar">
          <div className={`c100 p${per} t-blue`}>
            <span>{per}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
        </div>
        <div className="circle-header">{header}</div>
      </div>
    </Col>
  );
};

const listItems = skillList.map((obj) => (
  <ProgressChart key={obj.name} per={obj.per} header={obj.header} />
));

const skillLevelPage = () => {

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
  const skillFadeIn = element => {
    gsap.to(element, animationSpeed, {opacity: 1, y: 20, ease: animationTimingIn, stagger: { amount: 0.4 } });
  };

  // Animation for fading out
  const fadeOut = element => {
    gsap.to(element, animationSpeed, { opacity: 0, y: -20, ease: animationTimingOut });
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio > 0.1 ? skillFadeIn(".skillFadeIn") : fadeOut(".skillFadeIn");

  return (
    <section id="sec2" ref={sectionRef}>
      <div className="skill-level-section">
        <Container>
            <div className="skill-header skillFadeIn">
                <span className="icon-left"><img src={iconLeft} alt="iconLeft"/></span>
                OUR POWERFUL<span> SKILLS</span>
                <span className="icon-right"><img src={iconRight} alt="iconRight"/></span>
            </div>
            <div className="skill-sub-header skillFadeIn">
                We’re good and experienced at different things and areas and we promise about qulity of our works
            </div>
          <Row className="progress-listing skillFadeIn">{listItems}</Row>
        </Container>
      </div>
      </section>
  );
};

export default skillLevelPage;
