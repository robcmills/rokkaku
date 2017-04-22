import React from 'react'
import PropTypes from 'prop-types'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

const UsernameModal = ({ isOpen, onCancel, onSubmit }) => {
	const actions = [
		<FlatButton
			label="Cancel"
			onTouchTap={onCancel}
		/>,
		<FlatButton
			disabled
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
			<TextField fullWidth />
		</Dialog>
	)
}

UsernameModal.propTypes = {
	isOpen: PropTypes.bool,
	onCancel: PropTypes.func,
	onSubmit: PropTypes.func,
}

export default UsernameModal
