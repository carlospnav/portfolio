import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import Background from './components/background'
import ArticleList from './components/blog/articleList/container'
import IntroText from './components/blog/shared/IntroText'

class Router extends Component {
  render () {
    return (
      <Background>
        <IntroText />
        <Route exact path='/' render={() => (
          <Redirect to='/react' />
        )} />
        <Route path='/:category' component={ArticleList} />
      </Background>
    )
  }
}

export default Router
