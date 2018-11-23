import { actions } from '../../constants'

export default function articles (state = {
  1: {
    id: 1,
    title: 'ObaOba',
    category: 'REACT',
    content: '# Olá!',
    createdAt: 1542303526118,
    modifiedAt: null
  },
  2: {
    id: 2,
    title: 'Prozoba',
    category: 'REDUX',
    content: '## Tudo bem?',
    createdAt: 1542303526118,
    modifiedAt: 1542303547126
  },
  error: false,
  loading: false
}, action) {
  switch (action.type) {
    case actions.REQUEST_ARTICLES: {
      const actionStatus = {
        request: () => ({
          ...state,
          loading: true
        }),
        failure: () => ({
          ...state,
          loading: false,
          error: true
        }),
        success: () => state
      }
      return actionStatus[action.status]()
    }
    default: return state
  }
}
