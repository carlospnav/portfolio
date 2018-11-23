import React from 'react'

const Articles = ({ articles }) => articles && articles
  .map(article => (
    <div key={article.id}>
      <p>{article.title}</p>
      <p>{article.category}</p>
    </div>
  ))

export default Articles