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
    }, 4000);
  }
    
  useEffect(() => {

    /// Animation on Entering
    t1.staggerTo('.hidden-bg', animationSpeed, { width: '100%', ease: easeInOut }, 0.15)
    .staggerFromTo(['.text-wrapper', '.airdrop-wrapper'], animationSpeed, { x: -100, opacity: 0, ease: animationTimingIn }, { x: 0, opacity: 1, ease: animationTimingOut }, 0.15)
    .fromTo('.pulse-loader-wrapper', animationSpeed, { y: 100, opacity: 0, ease: animationTimingIn }, { y: 0, opacity: 1, ease: animationTimingOut }, '-=0.3')
    .to('.text-wrapper', animationSpeed, { opacity: 0, ease: animationTimingOut}, 0.1)
    .to('.airdrop-wrapper', animationSpeed, { opacity: 0, ease: animationTimingOut}, 0.1)
    .to('.pulse-loader-wrapper', animationSpeed, { opacity: 0, ease: animationTimingOut}, 0.1)
    .to('.revealer',1.5, {css:{scale:300, opacity:1, rotation: 180},delay: 1, onComplete: handleClosing()});
    t1.play();

    // ///  Animation on Leaving
    // t2.staggerTo(['.text-wrapper', '.airdrop-wrapper', '.pulse-loader-wrapper'], animationSpeed, { opacity: 0, ease: animationTimingOut }, 0.2)
    // .to('.revealer',1.5, {css:{scale:300, opacity:1, rotation: 180}}, 0.2)

  }, []);


  return (
    <React.Fragment>
      <div className="landing-section">
        <div className="hidden-bg one"></div>
        <div className="hidden-bg two"></div>
        <div className="landing-page">
          <div className="revealer"></div>
          <div className="main-container">
            <div className="pulse-loader-wrapper">
            <div className="pluse-loader ping">
              <div className="pluse-loader ping"></div>
            </div>
            </div>
            <div className="airdrop-wrapper">
              <div className="airdrop">
                <p>apd</p>
              </div>
            </div>
            <div className="text-wrapper">
              <h5>Welcome</h5>
              <h1 className="large">Wait a bit</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
