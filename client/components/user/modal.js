import React from 'react'
import PropTypes from 'prop-types'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

const UsernameModal = ({ errorText, isOpen, onCancel, onChange, onSubmit, username }) => {
  const actions = [
    <FlatButton
      label="Cancel"
      onTouchTap={onCancel}
    />,
    <FlatButton
      disabled={!username}
      label="Submit"
      onTouchTap={onSubmit}
      primary
    />,
  ]

  return (
    <Dialog
      actions={actions}
      contentStyle={{ maxWidth: '400px' }}
      modal
      open={isOpen}
      title="Please enter a username:"
    >
      <TextField
        errorText={errorText}
        fullWidth
        name="username"
        onChange={onChange}
      />
    </Dialog>
  )
}

UsernameModal.propTypes = {
  errorText: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  username: PropTypes.string,
}

export default UsernameModal
