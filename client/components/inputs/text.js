import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Input from './input'

const Label = styled.label`
  display: block;
  font-size: 12px;
`

const TextInput = ({ label, name, onChange, value }) => (
  <div>
    <Label htmlFor={name}>{label}</Label>
    <Input id={name} type="text" onChange={onChange} value={value} />
  </div>
)

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.function,
  value: PropTypes.string,
}

export default TextInput
