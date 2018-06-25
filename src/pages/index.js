import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Меня зовут <span className="bold">Артем Савин</span>
        </h5>

        <h3 className="bold">
          Я занимаюсь разработкой приложений. Изначально работал с 3D-движками, 
          затем затянуло в дизайн. И теперь я специализируюсь на Front-end разработке. 
          Вот места где я успел поработать и список моих работ.
        </h3>

        <ExperienceSection />
        <ProjectsSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
