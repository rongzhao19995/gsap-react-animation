import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import {gsap, Expo, Circ, Power3  } from "gsap";
import iconLeft from "../images/icon-left.png";
import iconRight from "../images/icon-right.png";

const commentPage = () => {

  const textList = [
    {
      key: 0,
      name: "ALEXIS SIMPSON",
      pos: "- CEO & Developer",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      key: 1,
      name: "ashley lennon",
      pos: "- IT Specialist",
      text: "Lorem Ipsum2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      key: 2,
      name: "Frank piener",
      pos: "- Sales Manager",
      text: "Lorem Ipsum3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  // gsap variable
  const t1 = gsap.timeline({ paused: true });
  const animationSpeed = 0.75;
  const animationTimingIn = Expo.easeIn;
  const animationTimingOut = Expo.easeOut;
  const easeInOut = Circ.easeInOut;

  let animateText = useRef(null);
  let animateBtn = useRef(null);


  const [textObj, setObjText] = useState(textList[1]);

  const changeText = (opt) => (e) => {
    if (opt === "left" && textList[textObj.key - 1] !== undefined) {
      textList[textObj.key - 1].xIndex = 20;
      setObjText(textList[textObj.key - 1]);
    } else if (opt === "right" && textList[textObj.key + 1] !== undefined) {
      textList[textObj.key + 1].xIndex = -20;
      setObjText(textList[textObj.key + 1]);
    }

    console.log(textObj);
  };

  useEffect(() => {

    t1.staggerFromTo([animateText, animateBtn], animationSpeed, { x: -100, opacity: 0, ease: animationTimingIn }, { x: 0, opacity: 1, ease: animationTimingOut }, 0.15);
    t1.play();
  
  }, [textObj]);



  return (
    <section id="sec5">
      <div className="section-comment">
        <Container>
          <Row className="section-wrapper">
            <div className="user-name" ref={(item) => { animateBtn = item; }} >
              {textObj.name} <span> {textObj.pos}</span>
            </div>
            <div className="user-details" ref={(item) => { animateText = item; }} >
              <span>"</span>
              {textObj.text}
              <span>"</span>
            </div>
            <div className="btn-section">
              <div className="left-btn" onClick={changeText("left")}>
                <div className="left-btn-wrapper">
                  <img src={iconLeft} alt="icon-left"></img>
                </div>
              </div>
              <div className="right-btn" onClick={changeText("right")}>
                <div className="right-btn-wrapper">
                  <img src={iconRight} alt="icon-right"></img>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default commentPage;
