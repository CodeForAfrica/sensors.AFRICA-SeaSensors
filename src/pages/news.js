import React from 'react';
import NewsHeader from '../components/NewsHeader';
import OurPartners from '../components/OurPartners';
import GetInvolved from '../components/GetInvolved';
import Footer from '../components/Footer';

function NewsPage() {
  return (
    <div className="main-container-parent">
      <NewsHeader />
      <GetInvolved />
      <OurPartners />
      <Footer />
    </div>
  );
}

export default NewsPage;
