import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Input from './input'

const Label = styled.label`
  display: block;
  font-size: 12px;
`

const TextInput = ({ input, label }) => (
  <div>
    <Label htmlFor={input.name}>{label}</Label>
    <Input id={input.name} type="text" {...input} />
  </div>
)

TextInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.function,
  value: PropTypes.string,
}

export default TextInput
