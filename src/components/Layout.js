import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="AlejoDeveloper, linux, programación y más">
      <html lang="es" />
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <footer>
      &copy; AlejoDeveloper.
      {(new Date()).getFullYear()}
    </footer>
  </div>
)

export default TemplateWrapper
