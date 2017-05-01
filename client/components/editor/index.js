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

const Center = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
`

const Editor = ({ createBoard }) => (
  <Center>
    <h2>Editor</h2>
    <Button onClick={createBoard}>Create New</Button>
  </Center>
)

Editor.propTypes = {
  createBoard: PropTypes.func,
}

const mapStateToProps = ({ user }) => ({ ...user })
const mapDispatchToActionCreators = dispatch => bindActionCreators({
  createBoard: editorActions.createBoard,
  showUsernameModal: userActions.showUsernameModal,
}, dispatch)

export default _.flowRight(
  connect(mapStateToProps, mapDispatchToActionCreators),
  withProps(({ createBoard, showUsernameModal, username }) => ({
    createBoard: () => {
      return username
        ? createBoard({ username })
        : showUsernameModal()
    },
  }))
)(Editor)
