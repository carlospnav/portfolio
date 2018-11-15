import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { objToArr } from '../../../../utils'

import Articles from '../presentational/articles'

class ArticleList extends Component {
  componentDidMount () {
    // dispatch fetch request to the server to retrieve articles.
  }

  render () {
    return (
      <main>
        <Articles articles={this.props.articles} />
      </main>
    )
  }
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }))
}

const mapStateToProps = ({ articles }) => ({
  articles: objToArr(articles)
})

export default connect(mapStateToProps)(ArticleList)
