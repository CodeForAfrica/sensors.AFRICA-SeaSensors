import React from 'react';
import IndexHeaderCarousel from '../components/IndexHeader';
import Blasts from '../components/Blasts';
import TopStory from '../components/TopStory';
import BlastFishing from '../components/TextSection';
import Video from '../components/Video';
import HowItWorks from '../components/TextSection/HowItWorks';
import Scuba from '../components/Scuba';
import More from '../components/More';
import Stories from '../components/Stories';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import '../assets/css/main.css';

function IndexPage() {
  return (
    <div className="main-container-parent">
      {typeof window !== 'undefined' && <IndexHeaderCarousel />}
      <Blasts />
      <TopStory />
      <BlastFishing />
      <Video />
      <HowItWorks />
      <Scuba />
      <More />
      <Stories />
      <Partners />
      <Footer />
    </div>
  );
}


export default IndexPage;
