import React, {Component} from 'react'
import BlastsSvg from './blastSvg'
import './Blasts.css'

class Blasts extends Component {
    render() {
        return (
            <div className="blast-size">
                <div className="blast-size__text-left">
                    <div className="blast-size__text-left__1">
                        <h3>Blasts Recorded.</h3>
                        <hr/>
                        <p>
                            Blast data is collected<br/> 
                            every X months, analysed,<br/> 
                            and uploaded to the map. 
                        </p>
                    </div>
                    <div className="blast-size__text-left__2">
                        Learn more.
                    </div>
                </div>
                <div>
                </div>
                <div className="blast-size__text-right">

                </div>
            </div>
        )
    }
}

export default Blasts;