import React, {Component} from 'react'
import BlastsSvg from './blastSvg'
import './Blasts.css'

class Blasts extends Component {
    render() {
        return (
            <div className="blast">
                <div className="blast-intro">
                    <h3 className="Blasts-Recorded">Blasts Recorded.</h3>
                </div>
                <div className="blast-info">
                    <div className="blast-grid">
                        <p className="Blast-data-is-collec">
                            Blast data is collected<br/>
                            every X months, analysed,<br/>
                            and uploaded to the map.
                        </p>
                    </div>
                    <div className="blast-grid blast-image-info">
                        <BlastsSvg/>
                        <div className="blast-grid-text">
                            <p className="recorded__blasts__figures">12 562</p>
                            <p className="recorded__blasts__text">Recorded blasts</p>
                        </div>
                    </div>
                    <div className="blast-grid">
                        <p className="recorded__blasts__text">1234</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blasts;
