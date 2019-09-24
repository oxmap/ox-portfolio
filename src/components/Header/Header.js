import React, { Component } from 'react'
import Links from 'components/Links/Links'

import avatarImg from 'assets/images/avatar.jpg';

import './Header.scss'

class Header extends Component {
  render() {
    return (
      <section className="header">
        <div className="row header__row">
          <img className="avatar" src={avatarImg} alt="This is me"></img>
          <div className="info">
            <span className="info__secondary">Меня зовут</span>
            <h1 className="info__primary">Артем Савин</h1>
            <span className="info__secondary">Живу в Томске</span>
            <span className="info__secondary">Разрабатываю web приложения</span>
          </div>
        </div>
        <Links />
      </section>
    )
  }
}

export default Header
