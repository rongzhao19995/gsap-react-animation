import React, { useEffect, useRef} from "react";
import {gsap, Expo, Circ, Bounce } from "gsap";
import SearchIcon from "./SearchIcon.jsx";
import { Container, Row, Col } from "react-bootstrap";

import $ from 'jquery';

const menuList = [
  {key: 1, name: 'HOME'},
  {key: 2, name: 'PORTFOLIO'},
  {key: 3, name: 'FEATURES'},
  {key: 4, name: 'PAGE'},
  {key: 5, name: 'CONTACT'},
];

const MenuChild = ({index, name}) => {

  return (
    <span className="nav-item"><a href={`#sec${index}`} >{name}</a></span>
  );
};

const listItems = menuList.map((obj) => (
  <MenuChild key={obj.key} index={obj.key} name={obj.name} />
));

const Navigationbar = () => {

  // gsap variable
  const t1 = gsap.timeline({ paused: true });
  const animationSpeed = 0.5;
  const animationTimingIn = Expo.easeIn;
  const animationTimingOut = Expo.easeOut;
  const animationBounceIn = Bounce.easeIn;
  const easeInOut = Circ.easeInOut;

  useEffect(() => {
  
    t1.staggerFromTo('.nav-item', animationSpeed, { y: -500, opacity: 0, ease: animationTimingIn }, { y: 0, opacity: 1, ease: animationTimingOut }, 0.10)    
    .fromTo('.nav-logo', animationSpeed, { x: -100, opacity: 0, ease: animationTimingIn }, { x: 0, opacity: 1, ease: animationTimingOut }, '-=0.70')  
    t1.play();

    // Jquery to scroll to the respective section within a deducted range for sticky header
    $('a[href^="#"]').on('click',function (e) {

      console.log(e);
      var target = this.hash,
      $target = $(target);

     $('html, body').stop().animate({
       'scrollTop': $target.offset().top - 90
      }, function () {
       window.location.hash = target;
      });

  });

  // create the observer
    const navWrapper = document.querySelector(".nav-wrapper");
    const sentinalEl = document.querySelector(".sentinal");
  
    const handler = (entries) => {
      console.log(entries);
      // entries is an array of observed dom nodes
      // we're only interested in the first one at [0]
      // because that's our .sentinal node.
      // Here observe whether or not that node is in the viewport
      if (!entries[0].isIntersecting) {
        navWrapper.classList.add("sticky");
      } else {
        navWrapper.classList.remove("sticky");
      }
    };
  
    const observer = new window.IntersectionObserver(handler);
    // give the observer some dom nodes to keep an eye on
    observer.observe(sentinalEl);
  
  });

  return (
    <React.Fragment>
      <div className="sentinal"></div>
      <div className="nav-wrapper">
      <div className="nav-bar">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={2} className="nav-logo">
              <div className="airdrop-wrapper">
                <div className="airdrop">
                  <p>apd</p>
                </div>
              </div>
            </Col>
            <Col xs={0} sm={0} md={12} lg={10} className="nav-opt">
              <Row  className="mobile-nav-bar">
              {listItems}
              <span className="nav-item">
                <span className="search-wrapper">
                  <SearchIcon className="search-icon" fill="green" />
                </span>
              </span>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      </div>

    </React.Fragment>
  );
};

export default Navigationbar;
