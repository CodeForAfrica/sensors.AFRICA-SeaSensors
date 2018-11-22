import React, {Component} from 'react'
import ScubaImg from '../../assets/ScubaImg.png'
import './Scuba.css'

class Scuba extends Component {
    render() {
        return <div>
            <img className="image-style" src={ScubaImg} alt=""/>
        </div>
    }

}

export default Scuba