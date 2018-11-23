import { actions } from '../constants'

export const failRequest = (message) => ({
  type: actions.REQUEST_FAILURE,
  payload: message
})
