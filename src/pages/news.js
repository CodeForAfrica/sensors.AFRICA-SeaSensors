import React from 'react';

import NewsHeader from '../components/NewsHeader';
import MonthlyStories from '../components/MonthlyStories';
import NewsCards from '../components/NewsCards';
import AllStoriesButton from '../components/AllStoriesButton';
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
      <NewsCards />
      <AllStoriesButton />
      <VideoAudio />
      <OurPartners />
      <GetInvolved />
      <Footer />
    </Page>
  );
}

export default News;
