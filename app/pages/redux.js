import React from 'react'
import { bindActionCreators } from 'redux'
import { startClock, addCount, serverRenderClock } from '../store'
import { connect } from 'react-redux'
import Page from '../components/Page'
import LayoutDesign from '../layouts/layoutDesign'

class Counter extends React.Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer }
  }

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
        <LayoutDesign>
            <Page title='Index Page' linkTo='/other' />
        </LayoutDesign>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Counter)