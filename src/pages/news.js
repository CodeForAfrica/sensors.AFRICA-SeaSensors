import React from "react";
import NewsHeader from '../components/NewsHeader';
import NewsTopStories from '../components/NewsTopStories';
import MonthStory from '../components/MonthStory';
import NewsCards from '../components/NewsCards';
import AllStoriesButton from '../components/AllStoriesButton';
import NewsPrintStories from '../components/NewsPrintStories';
import NewsPrintCards from '../components/NewsPrintCards';
import VideoAudio from '../components/VideoAudioSrories';
import OurPartners from '../components/OurPartners';
import GetInvolved from '../components/GetInvolved';
import Footer from '../components/Footer';

import withRoot from "../withRoot";

function NewsPage() {
  return (
    <div className="main-container-parent">
      <NewsHeader />
      <NewsTopStories />
      <MonthStory />
      <NewsCards />
      <AllStoriesButton />
      <NewsPrintStories />
      <NewsPrintCards />
      <VideoAudio origin={location.origin}/>
      <OurPartners />
      <GetInvolved />
      <Footer />
    </div>
  );
}

export default withRoot(NewsPage);
