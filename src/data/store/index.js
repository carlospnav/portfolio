import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from '../sagas'

const saga = createSagaMiddleware()

const store = createStore(
  reducers,
  compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

saga.run(sagas)

export default store
