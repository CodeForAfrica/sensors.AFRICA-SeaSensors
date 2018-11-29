import React, {Component} from 'react'

import './HeaderText.css'

class HeaderText extends Component {
  render() {
    return (
      <div className="content">
        <p className="content__header">Lorem ipsum <br/> dolor sitan amet.</p>
        <p className="content__text">Sea Sensors is an acoustic data project that<br/>
          collects underwater blast data to help xx
        </p>
      </div>
    );
  }
}

export default HeaderText;