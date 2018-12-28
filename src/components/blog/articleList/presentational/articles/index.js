import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import design from '../../../../../utils/design'

const Article = styled.article`
  padding: 20px;
  border-bottom: 1px dashed ${design.colors.articleSeparator};

  &:nth-of-type(even) {
    background-color: ${design.colors.articleBg};
  }

  &:last-of-type {
    border-bottom: none;
  }
`
const Body = styled.div`
  margin-top: 15px;
  display: flex;
`
const ArticleText = styled(design.fonts.Description)`
  color: ${design.colors.articleText};
  font-weight: 500;
`
const Title = styled(ArticleText)`
  font-size: 12px;
`
const Author = styled(ArticleText)`
  line-height: 10px;
  font-size: 10px;
  font-style: italic;
`

const Articles = ({ articles, meta }) => articles
  .map(article => (
    <Article key={article.id}>
      <header>
        <Title>{article.title}</Title>
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
