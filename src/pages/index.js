import React, {Component, Fragment} from 'react'
import HeaderCarousel from '../components/Header/Header';
import BlastFishing from '..//components/TextSection/BlastFishing';
import Video from '../components/Video/Video';
import Works from '../components/TextSection/HowItWorks';
import Stories from '../components/Cards/Stories';
import TopStory from '../components/TopStory/TopStory';
import Scuba from '../components/Scuba/Scuba';
import More from '../components/More//More';
import Footer from '../components/Footer/Footer';
import Partners from '../components/Partners/Partners';
import Blasts from '../components/Blasts/Blasts';
import HeaderCarousel2 from '../components/Carousel/Carousel';
import '../assets/css/main.css';

class IndexPage extends Component {
  render() {
    return <div className="main-container-parent">
      {typeof window !== 'undefined' && <HeaderCarousel/>}
      <Blasts/>
      <TopStory/>
      <BlastFishing/>
      <Video/>
      <Works/>
      <Scuba/>
      <More/>
      <Stories/>
      <Partners/>
      <Footer/>
    </div>
  }
}

export default IndexPage
