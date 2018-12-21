import React, {Component} from 'react'
import HeaderCarousel from '../components/Header'
import Blasts from '../components/Blasts'
import TopStory from '../components/TopStory'
import BlastFishing from '../components/TextSection'
import Video from '../components/Video'
import Works from '../components/TextSection/HowItWorks'
import Scuba from '../components/Scuba'
import More from '../components/More'
import Stories from '../components/Cards'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import '../assets/css/main.css'

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
