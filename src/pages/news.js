import React from 'react';

import NewsHeader from '../components/NewsHeader';
import MonthlyStories from '../components/MonthlyStories';
import VideoAudio from '../components/VideoAudioStories';
import OurPartners from '../components/OurPartners';
import GetInvolved from '../components/GetInvolved';
import Footer from '../components/Footer';
import { Page } from '../components/core';

function News() {
  return (
    <Page>
      <NewsHeader />
      <MonthlyStories />
      <VideoAudio origin="https://seasensors.africa" />
      <OurPartners />
      <GetInvolved />
      <Footer />
    </Page>
  );
}

export default News;
