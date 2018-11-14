import React, { Component } from 'react'
import { connect } from 'react-redux'
import { objToArr } from '../../../../utils'

class ArticleList extends Component {
  render () {
    return (
      <main>
        {this.props.articles.map(article => (
          <div key={article.id}>{article.title}</div>
        ))}
      </main>
    )
  }
}

const mapStateToProps = ({ articles }) => ({
  articles: objToArr(articles)
})

export default connect(mapStateToProps)(ArticleList)
