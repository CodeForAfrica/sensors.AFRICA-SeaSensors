import React from 'react';

import AboutUsHeader from '../components/AboutUsHeader';
import AboutImportantHeader from '../components/AboutImportantHeader';
import BlastDeployment from '../components/BlastDeployment';
import OurPartners from '../components/OurPartners';
import GetInvolved from '../components/GetInvolved';
import Footer from '../components/Footer';
import TeamCard from '../components/Team';
import ViewGallery from '../components/ViewGallery';
import { Page } from '../components/core';

function About() {
  return (
    <Page>
      <AboutUsHeader />
      <AboutImportantHeader />
      <BlastDeployment />
      <TeamCard />
      <OurPartners />
      <ViewGallery />
      <GetInvolved />
      <Footer />
    </Page>
  );
}

export default About;
