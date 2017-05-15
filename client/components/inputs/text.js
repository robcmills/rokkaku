import React from 'react'
import PropTypes from 'prop-types'

import Input from './input'
import Label from './label'

const TextInput = ({ input, label }) => (
  <div>
    <Label htmlFor={input.name}>{label}</Label>
    <Input id={input.name} type="text" {...input} />
  </div>
)

TextInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
}

export default TextInput
