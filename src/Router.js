import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Background from './components/background'
import ArticleList from './components/blog/articleList/container'
import IntroText from './components/blog/shared/IntroText'
import Content from './components/blog/shared/Content'

class Router extends Component {
  render () {
    return (
      <Background>
        <IntroText />
        <Content>
          <Route exact path='/' component={ArticleList} />
        </Content>
      </Background>
    )
  }
}

export default Router
