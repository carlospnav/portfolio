import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { objToArr } from '../../../../utils'
import { requestInitialArticles } from '../../../../data/store/actions/articles'

import Content from '../../shared/Content'
import CategoriesSelector from '../presentational/categoriesSelector'
import Articles from '../presentational/articles'
import MainContainer from '../../shared/MainContainer';

class ArticleList extends Component {
  componentDidMount () {
    this.props.dispatch(requestInitialArticles())
  }

  render () {
    return (
      <MainContainer>
        <CategoriesSelector />
        <Content>
          {!!this.props.articles.length && (
            <Articles articles={this.props.articles.data.filter(
              article => article.category === this.props.match.params.category.toUpperCase()
            )} />
          )}
        </Content>
      </MainContainer>
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
