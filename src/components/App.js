import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import LoadingBar from 'react-redux-loading'
import TweetPage from './TweetPage'

class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <TweetPage match={{params: {id: '5c9qojr2d1738zlx09afby'}}} />}
      </div>
    )
  }
}

export default connect()(App)