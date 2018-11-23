import { all } from 'redux-saga/effects'
import articleSagas from './articles'

export default function * rootSaga () {
  yield all([
    ...articleSagas
  ])
}
