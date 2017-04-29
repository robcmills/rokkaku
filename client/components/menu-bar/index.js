import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Bar = styled.div`
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
`

const MenuBar = () => {
  return (
    <Bar>
      MenuBar
    </Bar>
  )
}

MenuBar.propTypes = {
  prop: PropTypes.string,
}

export default MenuBar
