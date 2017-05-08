import React from 'react'
import PropTypes from 'prop-types'
// import _ from 'lodash'

// import Elements from '../elements'
import Hexes from './hexes'
// import Numbers from '../numbers'
// import Shapes from '../shapes'
// import Svg from '../svg'
// import ValidMoves from '../validMoves'

const Board = ({
  board,
}) => {
  return (
    <svg viewBox={`0, 0, ${board.width}, ${board.height}`}>
      <Hexes
        hexes={board.hexes}
        offsetX={board.offsetX}
        offsetY={board.offsetY}
      />
    </svg>
  )
}

Board.propTypes = {
  board: PropTypes.object,
}

export default Board
