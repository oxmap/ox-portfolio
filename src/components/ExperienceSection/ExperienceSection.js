import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import indorLogo from '../../../assets/images/experience/indor-logo.gif'
import milLogo from '../../../assets/images/experience/mil-logo.jpeg'
import utsLogo from '../../../assets/images/experience/uts-logo.jpg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Места работы">
        <div className="row">
          <ExperienceUnit
            logo={indorLogo}
            colour='#92bd46'
            title='Индорсофт'
            link='https://www.indorsoft.ru/'
            timeperiod='2014 - 2016'
            subtitle='Разрабатывал 3D подсистему для IndorCAD с использованием Delphi/DirectX 11/hlsl. Начал интеграцию движка с CesiumJS и BIM-рещениями.'
          />
          <ExperienceUnit
            logo={milLogo}
            colour='#fff'
            title='МинОбороны РФ'
            link='http://mil.ru/'
            timeperiod='2016 - 2017'
            subtitle='В составе срочной службы в научной роте выполнял научно-прикладные задачи. Разрабатывал систему автоматизации подготовки графических материалов на JS/QML/Python.'
          />
          <ExperienceUnit
            logo={utsLogo}
            colour='#FFFFFF'
            title='Универсальные терминал системы'
            link='http://unitsys.ru/'
            timeperiod='2017-2018'
            subtitle='Учавствовал в разработке игровых режимов iSandbox(Rx-подобный DSL/glsl), усовершенствования 3D/AR движка GameX(C++), внедрял DevOps(yaml, batch, js).'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
