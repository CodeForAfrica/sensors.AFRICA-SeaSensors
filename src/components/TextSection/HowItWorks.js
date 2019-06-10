import React from 'react';

import TextSection from './TextSection';
import { Works } from './data';

function HowItWorks() {
  return <TextSection title={Works.title} text={Works.text} />;
}

export default HowItWorks;
