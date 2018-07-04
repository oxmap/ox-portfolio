import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          <h3>Телефон</h3>
          <h4>+79069474799</h4>
          <h3>Почта</h3>
          <h4>oxmap@yandex.com</h4>
          <h3>Skype</h3>
          <h4>oxmap</h4>
          <h3>GitHub</h3>
          <a href='https://github.com/oxmap' target="_blank">
            <h4>github.com\oxmap</h4>
          </a>
        </div>
      </div>
    )
  }
}

export default About