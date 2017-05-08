import React from 'react'
import PropTypes from 'prop-types'
import { flowRight, noop } from 'lodash'
import { withProps } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TextInput from '../inputs/text'

import * as actions from './action-creators'

const EditName = ({ currentBoard, onChange }) => (
  <TextInput
    label="Name:"
    name="name"
    onChange={onChange}
    value={currentBoard.name}
  />
)

EditName.propTypes = {
  currentBoard: PropTypes.object,
  onChange: PropTypes.function,
}

EditName.defaultProps = {
  onChange: noop,
}

const mapStateToProps = ({ editor }) => ({ ...editor })
const mapDispatchToActionCreators = dispatch => bindActionCreators({
  updateBoard: actions.updateBoard,
}, dispatch)

export default flowRight(
  connect(mapStateToProps, mapDispatchToActionCreators),
  withProps(({ updateBoard }) => ({
    onChange: event => updateBoard({ name: event.target.value }),
  })),
)(EditName)
