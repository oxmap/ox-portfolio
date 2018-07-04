import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import weatherScreen from '../../../assets/images/projects/weather-screen.png'
import podcastsScreen from '../../../assets/images/projects/podcasts-screen.png'
import soapscrapperScreen from '../../../assets/images/projects/soap-scrapper-screen.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Проекты">
        <div className="row">
          <ExperienceUnit
            logo={weatherScreen}
            colour="#737fb7"
            title="OX.Weather"
            link="http://ox-weather.herokuapp.com/"
            timeperiod="2018"
            subtitle="Прогноз погоды для городов с поиском Google Autocomplete, написан на React, Webpack."
          />
          <ExperienceUnit
            logo={podcastsScreen}
            colour="#1f2226"
            title="OX.Podcasts"
            link="http://ox-podcasts.herokuapp.com/"
            timeperiod="2018"
            subtitle="Агрегатор подкастов с Itunes с встроенным плееером. Inspired by Yandex.Music. Использован Angular 5, PouchDb для локальной БД."
          />
          <ExperienceUnit
            logo={soapscrapperScreen}
            colour="#302a2a"
            title="OX.Soaps"
            link="http://ox-soap-scrapper.herokuapp.com/"
            timeperiod="2018"
            subtitle="Поиск фильмов/сериалов. Данные предоставлены TheMovieDB. Используется Angular 6, Material."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
