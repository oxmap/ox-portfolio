import React from 'react'
import Section from 'components/Section/Section'
import SectionUnit from 'components/SectionUnit/SectionUnit'

import weatherScreen from 'assets/images/projects/weather-screen.png'
import podcastsScreen from 'assets/images/projects/podcasts-screen.png'
import soapscrapperScreen from 'assets/images/projects/soap-scrapper-screen.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Проекты">
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
      </Section>
    )
  }
}

export default ProjectsSection
