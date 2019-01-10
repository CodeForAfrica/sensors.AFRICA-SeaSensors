import React, {Component, Fragment} from 'react'
import TextSection from './TextSection.js'
import {HowItWorks} from './data';

class Works extends Component {
    render() {
        return <Fragment>
            <TextSection title={HowItWorks.title} text={HowItWorks.text}/>
        </Fragment>
    }

}

export default Works;
