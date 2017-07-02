import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { flowRight } from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'

import EditIcon from 'material-ui/svg-icons/image/edit'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import EditName from './edit-name'
import EditHexTypes from './edit-hex-types'
import { MenuItem, MenuItemHover } from './menu-item'

import * as actions from './action-creators'

const MenuContainer = styled.div`
  background-color: white;
  border-left: 1px solid black;
  bottom: 0;
  overflow: scroll;
  position: absolute;
  right: 0;
  top: 0;
`

const EditButton = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  padding: 10px;
  position: absolute;
  right: 0;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`

const EditMenu = ({ isMenuOpen, toggleMenu }) => (isMenuOpen ?
  <MenuContainer>
    <MenuItemHover
      onClick={toggleMenu}
      style={{ display: 'flex', justifyContent: 'flex-end' }}
    >
      <CloseIcon style={{ color: 'currentColor', display: 'block' }} />
    </MenuItemHover>
    <MenuItem>
      <EditName />
    </MenuItem>
    <EditHexTypes />
  </MenuContainer> :
  <EditButton onClick={toggleMenu}>
    <EditIcon style={{ color: 'currentColor' }} />
  </EditButton>
)

EditMenu.propTypes = {
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
}

const mapStateToProps = ({ editor }) => ({ ...editor })
const mapDispatchToActionCreators = dispatch => bindActionCreators({
  toggleMenu: actions.toggleMenu,
}, dispatch)

export default flowRight(
  connect(mapStateToProps, mapDispatchToActionCreators),
  reduxForm({ form: 'EditMenu' })
)(EditMenu)
