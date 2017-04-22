import React from 'react'
import PropTypes from 'prop-types'
import { deepOrange500 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
try {
	if (typeof window !== 'undefined') {
		injectTapEventPlugin()
	}
} catch (e) {
	// do nothing
}

const _muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500
	}
})

const Mui = ({ children, userAgent }) => {
	/* https://github.com/callemall/material-ui/issues/3336 */
	const muiTheme = getMuiTheme(getMuiTheme({ userAgent }), _muiTheme)

	return (
		<MuiThemeProvider muiTheme={muiTheme}>
			{children}
		</MuiThemeProvider>
	)
}

Mui.propTypes = {
	children: PropTypes.node,
	userAgent: PropTypes.string,
}

export default Mui
