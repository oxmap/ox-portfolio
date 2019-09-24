import React, {Component} from 'react'

import './Section.scss';

class Section extends Component {
  render () {
    return (
      <section className="section">
        <div className="section-container">
          <h1 className="bold">
            {this.props.title}
          </h1>
          <p className="caption">{this.props.caption}</p>
          <div className="section-units">
            {this.props.children}
            {/* <div className="more">
              <p className="more__text">
                Остальные работы вы можете просмотреть
                <a className="more__link" target="_blank" href="works" rel="noopener noreferrer">здесь</a>
              </p>
            </div> */}
          </div>
        </div>
      </section>
    )
  }
}

export default Section
