import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Link from 'next/link'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import FlatButton from 'material-ui/FlatButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

import { toggleMenu } from './action-creators'

import User from '../user'

const Bar = styled.div`
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
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

const MenuBar = ({ isMenuOpen, toggleMenu }) => {
  let anchorEl
  return (
    <Bar>
      <MenuButton onClick={toggleMenu} ref={el => { anchorEl = el }}>
        <MenuIcon style={{ color: 'currentColor' }} />
        <Popover
          open={isMenuOpen}
          anchorEl={anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={toggleMenu}
        >
          <Menu>
            <Link href="/editor">
              <a><MenuItem primaryText="Editor" onClick={toggleMenu} /></a>
            </Link>
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </MenuButton>
      <User />
    </Bar>
  )
}

MenuBar.propTypes = {
  toggleMenu: PropTypes.func,
}

const mapStateToProps = ({ menu }) => ({ ...menu })
const mapDispatchToActionCreators = dispatch => bindActionCreators({
  toggleMenu,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToActionCreators)(MenuBar)
