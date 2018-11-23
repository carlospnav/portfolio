import { put } from 'redux-saga/effects'
import { failRequest } from '../../store/actions'

export const throwError = (e) => {
  put(failRequest(e.message))
}
