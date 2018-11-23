import { actions } from '../constants'

export const requestInitialArticles = () => ({
  type: actions.REQUEST_FETCH_ARTICLES
})

export const fetchArticlesSuccess = (articles) => ({
  type: actions.REQUEST_FETCH_ARTICLES_SUCCESS,
  payload: articles
})
