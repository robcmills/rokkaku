import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as menuActions from '../menu-bar/action-creators'

import RokkakuSvg from './rokkaku'

const Center = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
`

const Logo = ({ toggleMenu }) => (
  <Center onClick={toggleMenu}>
    <div>⬢ Rokkaku</div>
    <div>
      <RokkakuSvg />
    </div>
    <div>(Tap anywhere to begin)</div>
  </Center>
)

Logo.propTypes = {
  toggleMenu: PropTypes.func,
}

const mapDispatchToActionCreators = dispatch => bindActionCreators({
  toggleMenu: menuActions.toggleMenu,
}, dispatch)

export default connect(null, mapDispatchToActionCreators)(Logo)
