import React from 'react';
import SliderCarousel from '../components/IndexHeader/SliderCarousel';
import withRoot from '../withRoot';
import Blasts from '../components/Blasts';
import TopStory from '../components/TopStory';
import BlastFishing from '../components/TextSection';
import Video from '../components/Video';
import HowItWorks from '../components/TextSection/HowItWorks';
import Scuba from '../components/Scuba';
import More from '../components/More';
import Stories from '../components/Stories';
import Partners from '../components/Partners';
import GetInvolved from '../components/GetInvolved';
import Footer from '../components/Footer';
import '../assets/css/main.css';

function IndexPage({ location }) {
  return (
    <div className="main-container-parent">
      <SliderCarousel />
      <Blasts />
      <TopStory />
      <BlastFishing />
      <Video origin={location.origin} />
      <HowItWorks />
      <Scuba />
      <More />
      <Stories />
      <Partners />
      <GetInvolved />
      <Footer />
    </div>
  );
}

export default withRoot(IndexPage);
