import { takeEvery, call, put } from 'redux-saga/effects'
import { actions } from '../../store/constants'
import { fetchArticlesSuccess } from '../../store/actions/articles'
import { throwError } from '../utils'
import API from '../../apis'

function * fetchArticles () {
  try {
    const articles = yield call(API.fetchArticles, 5)
    yield put(fetchArticlesSuccess(articles))
  } catch (e) {
    yield throwError(e)
  }
}

export default [
  takeEvery(actions.REQUEST_FETCH_ARTICLES, fetchArticles)
]
