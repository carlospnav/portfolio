import React from 'react'

const Articles = ({ articles }) => articles && articles
  .map(article => (
    <p>.</p>
  ))

export default Articles
