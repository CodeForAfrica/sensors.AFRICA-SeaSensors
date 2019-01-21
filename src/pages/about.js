import React from 'react';
import AboutUsHeader from '../components/AboutUsHeader';
import AboutImportantHeader from '../components/AboutImportantHeader';
import BlastDeployment from '../components/BlastDeployment';
import OurPartners from '../components/OurPartners';
import GetInvolved from '../components/GetInvolved';
import Footer from '../components/Footer';
import '../assets/css/main.css';

function AboutPage() {
  return (
    <div className="main-container-parent">
      <AboutUsHeader />
      <AboutImportantHeader />
      <BlastDeployment />
      <OurPartners />
      <GetInvolved />
      <Footer />
    </div>
  );
}

export default AboutPage;
