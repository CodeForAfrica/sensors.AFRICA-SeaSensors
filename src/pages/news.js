import React from 'react';

import NewsHeader from '../components/NewsHeader';
import NewsTopStories from '../components/NewsTopStories';
import MonthStory from '../components/MonthStory';
import NewsCards from '../components/NewsCards';
import AllStoriesButton from '../components/AllStoriesButton';
import VideoAudio from '../components/VideoAudioSrories';
import OurPartners from '../components/OurPartners';
import GetInvolved from '../components/GetInvolved';
import Footer from '../components/Footer';
import { Page } from '../components/core';

function News() {
  return (
    <Page>
      <NewsHeader />
      <NewsTopStories />
      <MonthStory />
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
