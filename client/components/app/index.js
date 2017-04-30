import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Mui from '../mui'
import User from '../user'
import MenuBar from '../menu-bar'
import RokkakuLogo from '../logo/rokkaku'

const Reset = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

const App = ({ content, isServer, userAgent }) => (
  <Mui userAgent={userAgent}>
    <Reset>
      <MenuBar />
      {content}
    </Reset>
  </Mui>
)

App.propTypes = {
  content: PropTypes.node,
  isServer: PropTypes.bool,
  userAgent: PropTypes.string,
}

export default App
