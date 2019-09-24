import React, { Component } from 'react'

import './SectionUnit.scss'

class SectionUnit extends Component {
  render() {
    return (
      <div className="section-unit">
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <div
            className="image"
            style={{
              backgroundImage: `url(${this.props.logo})`,
              backgroundColor: this.props.colour
            }}>
          </div>
        </a>
        <h2 className="title bold">
          {this.props.title}
        </h2>
        <span className="time-period">
          {this.props.timeperiod}
        </span>
        <p className="subtitle">
          {this.props.subtitle}
        </p>
      </div>
    )
  }
}

export default SectionUnit
