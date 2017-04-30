import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Router from 'next/router'

const Background = styled.div`
  align-items: flex-start;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Menu = styled.div`
  background-color: white;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  color: black;
`

const MenuItem = styled.div`
  padding: 10px;
  &:hover {
    background-color: dimgray;
    color: white;
    cursor: pointer;
  }
`

const routeTo = path => () => Router.push(path)

const MainMenu = ({ toggleMenu }) => (
  <Background onClick={toggleMenu}>
    <Menu>
      <MenuItem onClick={routeTo('/editor')}>Editor</MenuItem>
      <MenuItem>MenuItem 2</MenuItem>
    </Menu>
  </Background>
)

MainMenu.propTypes = {
  toggleMenu: PropTypes.func,
}

export default MainMenu
