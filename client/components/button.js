import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.div`
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 10px;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`

const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default Button

