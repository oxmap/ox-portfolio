import React from 'react'

import ExperienceSection from 'components/ExperienceSection/ExperienceSection'
import ProjectsSection from 'components/ProjectsSection/ProjectsSection'
import Header from 'components/Header/Header'

import './style.scss'

const IndexPage = () => (
  <div>
    <Header />
    <ExperienceSection />
    <ProjectsSection />
  </div>
)

export default IndexPage
