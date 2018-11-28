import React, {Component} from 'react'

import './HeaderText.css'

class HeaderText extends Component {
  render() {
    return (
      <div className="content">
        <h1 className="content__header">Lorem ipsum dolor sitan amet</h1>
        <p className="content__text">Sea Sensors is an acoustic data project that
          collects underwater blast data to help xx
        </p>
      </div>
    );
  }
}

export default HeaderText;