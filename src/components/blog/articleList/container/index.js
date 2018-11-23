import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { objToArr } from '../../../../utils'
import { requestInitialArticles } from '../../../../data/store/actions/articles'

import Articles from '../presentational/articles'

class ArticleList extends Component {
  componentDidMount () {
    this.props.dispatch(requestInitialArticles())
  }

  render () {
    return (
      <main>
        <Articles articles={this.props.articles.data} />
      </main>
    )
  }
}

ArticleList.propTypes = {
  articles: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
  }).isRequired
}

const mapStateToProps = ({ articles }) => ({
  articles: {
    data: objToArr(articles).filter(item => item.id),
    loading: articles.loading,
    error: articles.error
  }
})

export default connect(mapStateToProps)(ArticleList)
