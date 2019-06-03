import React from 'react';

import ResourcesHeader from '../components/ResourcesHeader';
import GetInvolved from '../components/GetInvolved';
import Footer from '../components/Footer';
import ResourceVideos from '../components/ResourceCards';

import { Page } from '../components/core';

function Resources() {
  return (
    <Page>
      <ResourcesHeader />
      <ResourceVideos />
      <GetInvolved />
      <Footer />
    </Page>
  );
}

export default Resources;
