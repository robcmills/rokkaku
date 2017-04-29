import React from 'react'
import PropTypes from 'prop-types'

import Mui from '../mui'
import User from '../user'
import MenuBar from '../menu-bar'

const reset = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
}

const App = ({ isServer, userAgent }) => {
  return (
    <Mui userAgent={userAgent}>
      <div style={reset}>
        <MenuBar />
      </div>
    </Mui>
  )
}

App.propTypes = {
  isServer: PropTypes.bool,
  userAgent: PropTypes.string,
}

export default App
