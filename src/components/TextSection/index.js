import React, { Component, Fragment } from 'react';
import TextSection from './TextSection';
import { Blast } from './data';

class BlastFishing extends Component {
  render() {
    return (
      <Fragment>
        <TextSection title={Blast.title} text={Blast.text} />
      </Fragment>
    );
  }
}

export default BlastFishing;
