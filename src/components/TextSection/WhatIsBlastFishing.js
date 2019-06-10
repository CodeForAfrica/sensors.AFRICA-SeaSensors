import React from 'react';

import TextSection from './TextSection';
import { Blast } from './data';

function WhatIsBlastFishing() {
  return <TextSection title={Blast.title} text={Blast.text} />;
}

export default WhatIsBlastFishing;
