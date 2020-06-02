import React from 'react'
import Section from 'components/Section/Section'
import SectionUnit from 'components/SectionUnit/SectionUnit'

import indorLogo from 'assets/images/experience/indor-logo.gif'
import milLogo from 'assets/images/experience/mil-logo.jpeg'
import utsLogo from 'assets/images/experience/uts-logo.jpg'
import tomskasuLogo from 'assets/images/experience/tomskasu-logo.jpg'
import neostkLogo from 'assets/images/experience/neostk-logo.jpg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Места работы" caption="Часть мест, где я успел поработать">
        <SectionUnit
          logo={indorLogo}
          colour='#92bd46'
          title='Индорсофт'
          link='https://www.indorsoft.ru/'
          timeperiod='2014 - 2016'
          subtitle='Разрабатывал 3D подсистему для IndorCAD с использованием Delphi/DirectX 11/hlsl. Начал интеграцию движка с CesiumJS и BIM-рещениями.'
        />
        <SectionUnit
          logo={milLogo}
          colour='#fff'
          title='МинОбороны РФ'
          link='http://mil.ru/'
          timeperiod='2016 - 2017'
          subtitle='В составе срочной службы в научной роте выполнял научно-прикладные задачи. Разрабатывал систему автоматизации подготовки графических материалов на JS/QML/Python.'
        />
        <SectionUnit
          logo={utsLogo}
          colour='#FFFFFF'
          title='Универсальные терминал системы'
          link='http://unitsys.ru/'
          timeperiod='2017-2018'
          subtitle='Учавствовал в разработке игровых режимов iSandbox(Rx-подобный DSL/glsl), усовершенствования 3D/AR движка GameX(C++), внедрял DevOps(yaml, batch, js).'
        />
        <SectionUnit
          logo={tomskasuLogo}
          colour='#FFFFFF'
          title='ТомскАСУпроект'
          link='https://tomskasu.ru/'
          timeperiod='2018-настоящее время'
          subtitle='Руководил отделом фронтенд разработки, занимался оценкой проектов, разрабатывал фронтенд часть в веб проектах. Angular.'
        />
        <SectionUnit
          logo={neostkLogo}
          colour='#FFFFFF'
          title='NeoStack'
          link='https://neostk.com/'
          timeperiod='2019-настоящее время'
          subtitle='Участвовал в заказной разработке. React, Angular.'
        />
      </Section>
    )
  }
}

export default ExperienceSection
