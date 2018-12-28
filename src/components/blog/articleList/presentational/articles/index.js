import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../../../../utils/design/colors'
import { ArticleTitle, Author } from '../../../../../utils/design/fonts'

const Article = styled.article`
  padding: 20px;
  border-bottom: 1px dashed ${colors.articleSeparator};

  &:nth-of-type(even) {
    background-color: ${colors.articleBg};
  }

  &:last-of-type {
    border-bottom: none;
  }
`
const Body = styled.div`
  margin-top: 15px;
  display: flex;
`

const Articles = ({ articles, meta }) => articles
  .map(article => (
    <Article key={article.id}>
      <header>
        <ArticleTitle>{article.title}</ArticleTitle>
      </header>
      <Body>
        <Author>By ThingTwo</Author>
      </Body>
    </Article>
  ))

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })).isRequired
}

export default Articles
