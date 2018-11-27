import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Background from './components/background'
import ArticleList from './components/blog/articleList/container'
import IntroText from './components/blog/introText'

class Router extends Component {
  render () {
    return (
      <Background>
        <IntroText />
        <Route exact path='/' component={ArticleList} />
      </Background>
    )
  }
}

export default Router
