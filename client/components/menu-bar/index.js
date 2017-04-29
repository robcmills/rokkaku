import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import FlatButton from 'material-ui/FlatButton'

import User from '../user'

const Bar = styled.div`
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
`

const MenuBar = () => {
  return (
    <Bar>
      <MenuIcon color="white" style={{ padding: '10px' }} />
      Rokkaku
      <User />
    </Bar>
  )
}

MenuBar.propTypes = {
  prop: PropTypes.string,
}

export default MenuBar
