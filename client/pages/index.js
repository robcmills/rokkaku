import React from 'react'
import PropTypes from 'prop-types'
import 'babel-polyfill'

import withRedux from 'next-redux-wrapper'
import makeStore from '../redux/store'

import Mui from '../components/mui'
import User from '../components/user'

const reset = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
}

class IndexPage extends React.Component {
  static propTypes = {
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
      <Mui userAgent={userAgent}>
        <div style={reset}>
          <h1>Index Page</h1>
          <User />
        </div>
      </Mui>
    )
  }
}

export default withRedux(makeStore)(IndexPage)
