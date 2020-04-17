import React, { useEffect, useState} from "react";
import { Container, Row, Button} from "react-bootstrap";
import {gsap, Expo, Circ  } from "gsap";

const LandingPage = ({onClick}) => {

  // gsap variable
  const t1 = gsap.timeline({ paused: true });
  const t2 = gsap.timeline({ paused: true });
  const animationSpeed = 0.75;
  const animationTimingIn = Expo.easeIn;
  const animationTimingOut = Expo.easeOut;
  const easeInOut = Circ.easeInOut;

  const handleClosing = () => {

    setTimeout(() => {
      onClick();
    }, 4200);
  }
    
  useEffect(() => {

    /// Animation on Entering
    t1.staggerTo('.hidden-bg', animationSpeed, { width: '100%', ease: easeInOut }, 0.15)
    .staggerFromTo(['.text-wrapper', '.airdrop-wrapper'], animationSpeed, { x: -100, opacity: 0, ease: animationTimingIn }, { x: 0, opacity: 1, ease: animationTimingOut }, 0.15)
    .fromTo('.spinner-loader-wrapper', animationSpeed, { y: 100, opacity: 0, ease: animationTimingIn }, { y: 0, opacity: 1, ease: animationTimingOut }, '-=0.3')

    .to('.airdrop-wrapper', animationSpeed, { opacity: 0, ease: animationTimingOut}, 0.1)
    .to('.spinner-loader-wrapper', animationSpeed, { opacity: 0, delay:.5, ease: animationTimingOut})
    .to('.text-wrapper', animationSpeed, { opacity: 0, ease: animationTimingIn}, 0.1)
    .to('.revealer',1.5, {css:{scale:300, opacity:1, rotation: 180}, onComplete: handleClosing()});
    t1.play();

  }, []);


  return (
    <React.Fragment>
      <div className="landing-section">
        <div className="hidden-bg one"></div>
        <div className="hidden-bg two"></div>
        <div className="landing-page">
          <div className="revealer"></div>
          <div className="main-container">
            <div className="spinner-loader-wrapper">
                <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
            <div className="airdrop-wrapper">
              <div className="airdrop">
                <p>apd</p>
              </div>
            </div>
            <div className="text-wrapper">
              <div className="small">Welcome</div>
              <div className="large">Wait a bit</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
