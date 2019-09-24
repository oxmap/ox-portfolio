import React from 'react'
import Helmet from 'react-helmet'

import favicon16 from 'assets/favicons/favicon-16x16.png'
import favicon32 from 'assets/favicons/favicon-32x32.png'

class TemplateWrapper extends React.Component {
  render () {
    const { children } = this.props

    return (
      <div className="template-wrapper">
        <Helmet
          title='Артем Савин'
          link={[
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: favicon16 },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon32 }
          ]}
        />
        <div className="template-wrapper-children">
          { children() }
        </div>
      </div>
    )
  }
}

export default TemplateWrapper
