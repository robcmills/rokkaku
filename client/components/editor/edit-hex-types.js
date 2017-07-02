import React from 'react'
import { map } from 'lodash'

import Label from '../inputs/label'
import { MenuItem } from './menu-item'
import HexType from './hex-type'

import { hexTypes } from '../../modules/constants'

const EditHexTypes = () => (
  <div>
    <MenuItem>
      <Label>Hex Types:</Label>
    </MenuItem>
    {map(hexTypes, (color, type) =>
      <HexType color={color} key={type} type={type} />)}
  </div>
)

export default EditHexTypes
