import React, {Component, Fragment} from 'react'
import FullWidthGrid from './TextSection.js'
import HowItWorks from './data';

class Works extends Component {
    render() {
        return <Fragment>
            <FullWidthGrid
                title={HowItWorks.HowItWorks.title}
                text={HowItWorks.HowItWorks.text}/>
        </Fragment>
    }

}

export default Works;
