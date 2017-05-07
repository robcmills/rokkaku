import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MenuIcon from 'material-ui/svg-icons/navigation/menu'

import * as actions from './action-creators'

import MainMenu from './main-menu'
import User from '../user'

const Bar = styled.div`
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
`

const MenuButton = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  padding: 10px;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`

const MenuBar = ({ isMenuOpen, toggleMenu }) => (
  <Bar>
    <MenuButton onClick={toggleMenu}>
      <MenuIcon style={{ color: 'currentColor' }} />
    </MenuButton>
    <User />
    {isMenuOpen && <MainMenu toggleMenu={toggleMenu} />}
  </Bar>
)

MenuBar.propTypes = {
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
}

const mapStateToProps = ({ menu }) => ({ ...menu })
const mapDispatchToActionCreators = dispatch => bindActionCreators({
  toggleMenu: actions.toggleMenu,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToActionCreators)(MenuBar)
