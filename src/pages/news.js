import React from "react";
import NewsHeader from '../components/NewsHeader';
import NewsTopStories from '../components/NewsTopStories';
import MonthStory from '../components/MonthStory';
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
      <OurPartners />
      <GetInvolved />
      <Footer />
    </div>
  );
}

export default withRoot(NewsPage);
