import React, {Component, Fragment} from 'react'
import FullWidthGrid from './TextSection.js'
import Blast from './data';

class BlastFishing extends Component {
    render() {
        console.log(Blast.Blast.title)
        return <Fragment>
            <FullWidthGrid
                title = {Blast.Blast.title}
                text = {Blast.Blast.text}
            />
        </Fragment>
    }

}

export default BlastFishing;
