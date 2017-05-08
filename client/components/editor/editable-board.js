import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from './action-creators'

import Board from '../board'
import EditMenu from './menu'

const Center = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
`

const EditableBoard = ({ board }) => (
  <Center>
    <Board board={board} />
    <EditMenu />
  </Center>
)

EditableBoard.propTypes = {
  board: PropTypes.object,
}

const mapStateToProps = ({ editor }) => ({ ...editor })
const mapDispatchToActionCreators = dispatch => bindActionCreators({
  toggleMenu: actions.toggleMenu,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToActionCreators)(EditableBoard)
