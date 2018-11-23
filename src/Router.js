import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ArticleList from './components/blog/articleList/container'

class Router extends Component {
  render () {
    return (
      <div>
        <Route exact path='/' component={ArticleList} />
      </div>
    )
  }
}

export default Router
