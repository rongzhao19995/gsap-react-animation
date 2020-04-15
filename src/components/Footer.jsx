import React from "react";
import { Container } from "react-bootstrap";
import HorizontalScrolling from "./HorizontalScrolling.jsx";

const Footer = () => {

  return (
    <React.Fragment>
      <div className="footer">
        <div className="section-partner">
          <Container>
            <HorizontalScrolling />
          </Container>
        </div>
        <div className="section-footer">
          <Container>
            <div className="footer-text">
              <a href="https://facebook.com/" target="_blank">
                Copyright © 2017 APD Digital Services Sdn Bhd, All Rights
                Reserved.
              </a>
            </div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
