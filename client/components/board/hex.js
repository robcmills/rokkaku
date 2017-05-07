import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'

import { COS_60, SIN_60, STROKE_WIDTH } from '../../modules/constants'

const Hex = ({ fill, onClick, radius, stroke, strokeWidth, style, centerX, centerY }) => {
  const adjacent = radius * COS_60
  const opposite = radius * SIN_60
  const points = map([
    [radius, 0],
    [adjacent, opposite],
    [-adjacent, opposite],
    [-radius, 0],
    [-adjacent, -opposite],
    [adjacent, -opposite],
  ], (coord) => `${centerX + coord[0]},${centerY + coord[1]}`).join(' ')
  return (
    <polygon
      fill={fill}
      onClick={onClick}
      points={points}
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={style}
    />
  )
}

Hex.propTypes = {
  fill: PropTypes.string,
  onClick: PropTypes.func,
  radius: PropTypes.number,
  stroke: PropTypes.number,
  strokeWidth: PropTypes.number,
  style: PropTypes.object,
  centerX: PropTypes.number,
  centerY: PropTypes.number,
}

Hex.defaultProps = {
  strokeWidth: STROKE_WIDTH,
}

export default Hex
