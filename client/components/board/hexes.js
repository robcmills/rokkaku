import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'

import { hexColors, HEX_RADIUS, SIN_60 } from '../../modules/constants'
import Hex from './hex'

const Hexes = ({ hexes, offsetX, offsetY }) => {
  return (
    <g>
      {
        map(hexes, (row, yIndex) => (
          map(row, (hex, xIndex) => {
            const isEvenRow = yIndex % 2 === 0
            const { color, type } = hex
            // let ownedBy
            // if (find(blackElements, { type })) {
            //   ownedBy = 'black'
            // }
            // if (find(whiteElements, { type })) {
            //   ownedBy = 'white'
            // }
            const centerX = (HEX_RADIUS * 3 * xIndex) +
              (isEvenRow ? 0 : HEX_RADIUS * 1.5) + offsetX
            const centerY = (SIN_60 * HEX_RADIUS * yIndex) + offsetY
            return (
              <g>
                <Hex
                  fill={color || hexColors[type]}
                  radius={HEX_RADIUS}
                  centerX={centerX}
                  centerY={centerY}
                />
              </g>
            )
          })
        ))
      }
    </g>
  )
}

Hexes.propTypes = {
  hexes: PropTypes.array,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
}

export default Hexes
