import React from 'react'

const Articles = ({ articles }) => articles && articles
  .map(article => (
    <p style={{ margin: 0 }}>{article.title}</p>
  ))

export default Articles
