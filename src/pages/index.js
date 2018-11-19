import React, {Component, Fragment} from 'react'
import HeaderCarousel from '../components/Header/Header';
import BlastFishing from '..//components/TextSection/BlastFishing';
import Video from '../components/Video/Video';
import Works from '../components/TextSection/HowItWorks';
import Stories from '../components/Cards/Stories';
import TopStory from '../components/TopStory/TopStory';
import '../assets/css/main.css';

class IndexPage extends Component {
  render() {
    return <Fragment>
      <HeaderCarousel/>
      <TopStory/>
      <BlastFishing/>
      <Video/>
      <Works/>
      <Stories/>
    </Fragment>
  }
}

export default IndexPage
