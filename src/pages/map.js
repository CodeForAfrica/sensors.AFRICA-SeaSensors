import React from "react";

import mapImage from "../assets/mapppp.png";
import withRoot from "../withRoot";

function MapPage() {
  return (
    <div className="main-container-parent">
      <img src={mapImage} alt="Map" />
    </div>
  );
}

export default withRoot(MapPage);
