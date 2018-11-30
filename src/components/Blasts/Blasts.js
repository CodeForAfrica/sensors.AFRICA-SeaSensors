import React, {Component} from 'react'
import BlastsSvg from './blastSvg'
import './Blasts.css'

class Blasts extends Component {
    render() {
        return (
            <div className="blast-size">
                <div className="blast-size__text-left">
                    <div className="blast-size__text-left__1">
                        <h3 className="Blasts-Recorded">Blasts Recorded.</h3>
                        <hr/>
                        <p className="Blast-data-is-collec">
                            Blast data is collected<br/>
                            every X months, analysed,<br/>
                            and uploaded to the map.
                        </p>
                    </div>
                    <div className="blast-size__text-left__2">
                        Learn more.
                    </div>
                </div>
                <div><BlastsSvg/></div>
                <div className="recorded__blasts">
                    <div className="recorded__blasts__figures">12 562</div>
                    <div className="recorded__blasts__text">Recorded Blasts</div>
                </div>
                <div className="blast-size__text-right"></div>
            </div>
        )
    }
}

export default Blasts;