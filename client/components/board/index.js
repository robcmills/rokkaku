import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import _ from 'lodash'

// import Elements from '../elements'
import Hexes from './hexes'
// import Numbers from '../numbers'
// import Shapes from '../shapes'
// import Svg from '../svg'
// import ValidMoves from '../validMoves'

const Board = ({
  currentBoard,
}) => {
  return (
    <svg viewBox={`0, 0, ${currentBoard.width}, ${currentBoard.height}`}>
      <Hexes
        hexes={currentBoard.hexes}
        offsetX={currentBoard.offset}
        offsetY={currentBoard.offset}
      />
    </svg>
  )
}

Board.propTypes = {
  currentBoard: PropTypes.object,
}

const mapStateToProps = ({ editor }) => ({ ...editor })
export default connect(mapStateToProps)(Board)
