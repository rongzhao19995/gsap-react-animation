import React, { useEffect, useState} from "react";
import Navigationbar from "./Navigationbar.jsx";
import Footer from './Footer.jsx';
import IconSeparate from "./IconSeparate.jsx";

import Content from "../pages/content.jsx";

import LandingPage from '../pages/landingPage.jsx'
import OfferPage from "../pages/offerPage.jsx";
import SkillLevelPage from "../pages/skillLevelPage.jsx";
import FeaturesPage from "../pages/featuresPage.jsx";
import MemberPage from "../pages/memberPage.jsx";
import CommentPage from "../pages/commentPage.jsx";
import ContactUsPage from "../pages/contactUsPage.jsx";

import seprate1 from "../images/seprate1.png";
import seprate2 from "../images/seprate2.png";



const Main = () => {

  const [showLanding, setShowLanding] = useState(true);

  const closeLanding = () => {
    setShowLanding(false);
    
  };

  useEffect(() => {
  }, []);


  return (
    <React.Fragment>
      {
        showLanding ?
        <LandingPage onClick={closeLanding}/>
        :
        <div className="fade-in">
        <Navigationbar />
        <Content>
          <OfferPage />
          <IconSeparate icon={seprate1} color={'blue'}  inlineStyle={''}/>
          <SkillLevelPage />
          <FeaturesPage />
          <MemberPage />
          <ContactUsPage />
          <IconSeparate icon={seprate2} color={'black'} inlineStyle={''} />
          <CommentPage />
        </Content>
        <Footer />
        </div>
      }
  </React.Fragment>
  )

};

export default Main;
