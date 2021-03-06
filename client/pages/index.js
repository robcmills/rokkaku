import React from 'react'
import PropTypes from 'prop-types'
import 'babel-polyfill'

import App from '../components/app'
import Logo from '../components/logo'

import withRedux from 'next-redux-wrapper'
import makeStore from '../redux/store'

class IndexPage extends React.Component {
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
        content={<Logo />}
        isServer={isServer}
        userAgent={userAgent}
      />
    )
  }
}

export default withRedux(makeStore)(IndexPage)
