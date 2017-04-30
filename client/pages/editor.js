import React from 'react'
import PropTypes from 'prop-types'
import 'babel-polyfill'

import App from '../components/app'
import Editor from '../components/editor'

import withRedux from 'next-redux-wrapper'
import makeStore from '../redux/store'

class EditorPage extends React.Component {
  static propTypes = {
    isServer: PropTypes.bool,
    userAgent: PropTypes.string,
  }

  static getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    const isServer = !!req
    return { isServer, userAgent }
  }

  render() {
    const { isServer, userAgent } = this.props
    return (
      <App
        content={<Editor />}
        isServer={isServer}
        userAgent={userAgent}
      />
    )
  }
}

export default withRedux(makeStore)(EditorPage)
