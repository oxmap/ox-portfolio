import React from 'react'
import Section from 'components/Section/Section'
import SectionUnit from 'components/SectionUnit/SectionUnit'

import weatherScreen from 'assets/images/projects/weather-screen.png'
import podcastsScreen from 'assets/images/projects/podcasts-screen.png'
import soapscrapperScreen from 'assets/images/projects/soap-scrapper-screen.png'
import schoolioScreen from 'assets/images/projects/schoolio-screen.jpg'
import hhBotScreen from 'assets/images/projects/hhbot-screen.png'
import chessScreen from 'assets/images/projects/chess-screen.jpg'
import trelloScreen from 'assets/images/projects/trello-screen.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Проекты">
        <SectionUnit
          logo={trelloScreen}
          colour="#60a3bc"
          title="OX.Trello"
          link="https://ox-trello.web.app/"
          timeperiod="2019"
          subtitle="Автоматизация работы с Trello. JS, Trello API, Parcel, PWA."
        />
        <SectionUnit
          logo={weatherScreen}
          colour="#737fb7"
          title="OX.Weather"
          link="http://ox-weather.herokuapp.com/"
          timeperiod="2018"
          subtitle="Прогноз погоды для городов с поиском Google Autocomplete, написан на React, Webpack."
        />
        <SectionUnit
          logo={podcastsScreen}
          colour="#1f2226"
          title="OX.Podcasts"
          link="http://ox-podcasts.herokuapp.com/"
          timeperiod="2018"
          subtitle="Агрегатор подкастов с Itunes с встроенным плееером. Inspired by Yandex.Music. Использован Angular 5, PouchDb для локальной БД."
        />
        <SectionUnit
          logo={soapscrapperScreen}
          colour="#302a2a"
          title="OX.Soaps"
          link="http://ox-soap-scrapper.herokuapp.com/"
          timeperiod="2018"
          subtitle="Поиск фильмов/сериалов. Данные предоставлены TheMovieDB. Используется Angular 6, Material."
        />
        <SectionUnit
          logo={hhBotScreen}
          colour="#de154b"
          title="OX.HHbot"
          link="https://github.com/oxmap/hhbot/"
          timeperiod="2017"
          subtitle="Бот для телеграм, мониторивший по поиску определённые вакансии и выдававший их ежедневно. Python, Telegram Bot API"
        />
        <SectionUnit
          logo={chessScreen}
          colour="#5d5f6b"
          title="OX.Chess"
          link="https://sourceforge.net/projects/comicschess/"
          timeperiod="2015"
          subtitle="Веб-приложение комикс шахматы. В этом проекте показываются возможности графического клиент-серверного приложения. Написан на js(сервер - node.js, клиент three.js)."
        />
        <SectionUnit
          logo={schoolioScreen}
          colour="#e9edec"
          title="OX.Schoolio"
          link="https://sourceforge.net/projects/schoolio/"
          timeperiod="2014"
          subtitle="Приложение для визуализации школьных предметов. Был реализован в рамках проектного обучения в университете. Написан на c++(framework Cinder)."
        />
      </Section>
    )
  }
}

export default ProjectsSection
