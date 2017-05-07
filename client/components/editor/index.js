import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withProps } from 'recompose'

import * as editorActions from './action-creators'
import * as userActions from '../user/action-creators'
import Button from '../button'
import Board from '../board'

const Center = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
`

const Editor = ({ createNewBoard, currentBoard }) => {
  return currentBoard ?
    <Board /> :
    <Center>
      <h2>Editor</h2>
      <Button onClick={createNewBoard}>Create New</Button>
    </Center>
}

Editor.propTypes = {
  createNewBoard: PropTypes.func,
  currentBoard: PropTypes.object,
}

const mapStateToProps = ({ editor, user }) => ({ ...editor, ...user })
const mapDispatchToActionCreators = dispatch => bindActionCreators({
  createNewBoard: editorActions.createNewBoard,
  showUsernameModal: userActions.showUsernameModal,
}, dispatch)

export default _.flowRight(
  connect(mapStateToProps, mapDispatchToActionCreators),
  withProps(({ createNewBoard, showUsernameModal, username }) => ({
    createNewBoard: () => {
      return username ?
        createNewBoard({ username }) :
        showUsernameModal()
    },
  }))
)(Editor)
