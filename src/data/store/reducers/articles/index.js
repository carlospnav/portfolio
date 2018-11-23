import { actions } from '../../constants'
import { ArrToObj } from '../../../../utils'

export default function articles (state = {
  error: false,
  loading: false
}, action) {
  switch (action.type) {
    case actions.REQUEST_FETCH_ARTICLES: {
      return {
        ...state,
        loading: true
      }
    }
    case actions.REQUEST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case actions.REQUEST_FETCH_ARTICLES_SUCCESS: {
      const data = ArrToObj(action.payload)
      return {
        ...state,
        ...data,
        loading: false
      }
    }
    default: return state
  }
}
