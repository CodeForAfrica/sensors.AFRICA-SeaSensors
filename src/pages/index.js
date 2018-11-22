import React, {Component, Fragment} from 'react'
import HeaderCarousel from '../components/Header/Header';
import BlastFishing from '..//components/TextSection/BlastFishing';
import Video from '../components/Video/Video';
import Works from '../components/TextSection/HowItWorks';
import Stories from '../components/Cards/Stories';
import TopStory from '../components/TopStory/TopStory';
import Scuba from '../components/Scuba/Scuba';
import More from '../components/More//More';
import Partners from '../components/Partners/Partners';
import '../assets/css/main.css';

class IndexPage extends Component {
  render() {
    return <Fragment>
      <HeaderCarousel/>
      <TopStory/>
      <BlastFishing/>
      <Video/>
      <Works/>
      <Scuba/>
      <More/>
      <Stories/>
      <Partners/>
    </Fragment>
  }
}

export default IndexPage
