import React from "react";
import ResourcesHeader from "../components/ResourcesHeader";
import GetInvolved from "../components/GetInvolved";
import Footer from "../components/Footer";
import ResourceVideos from "../components/ResourceCards";
import "../assets/css/main.css";

import withRoot from "../withRoot";

function ResourcesPage() {
  return (
    <div className="main-container-parent">
      <ResourcesHeader />
      <ResourceVideos />
      <GetInvolved />
      <Footer />
    </div>
  );
}

export default withRoot(ResourcesPage);
