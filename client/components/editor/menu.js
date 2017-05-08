import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import EditIcon from 'material-ui/svg-icons/image/edit'
import CloseIcon from 'material-ui/svg-icons/navigation/close'

import * as actions from './action-creators'

const BottomRight = styled.div`
  bottom: 0;
  position: absolute;
  right: 0;
`

const Menu = styled.div`
  border-left: 1px solid black;
  border-top: 1px solid black;
`

const MenuItem = styled.div`
  padding: 10px;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`

const EditButton = styled.div`
  align-items: center;
  display: flex;
  padding: 10px;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`

const EditMenu = ({ isMenuOpen, toggleMenu }) => (
  <BottomRight>
    {
      isMenuOpen ?
        <Menu>
          <MenuItem onClick={toggleMenu}>
            <CloseIcon style={{ color: 'currentColor', display: 'block' }} />
          </MenuItem>
        </Menu> :
        <EditButton onClick={toggleMenu}>
          <EditIcon style={{ color: 'currentColor' }} />
        </EditButton>
    }
  </BottomRight>
)

EditMenu.propTypes = {
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
}

const mapStateToProps = ({ editor }) => ({ ...editor })
const mapDispatchToActionCreators = dispatch => bindActionCreators({
  toggleMenu: actions.toggleMenu,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToActionCreators)(EditMenu)
