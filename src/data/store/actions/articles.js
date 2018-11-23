import { actions } from '../constants'

export const requestInitialArticles = () => ({
  type: actions.REQUEST_ARTICLES,
  status: actions.general.request
})
