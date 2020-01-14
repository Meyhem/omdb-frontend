import { createStore, combineReducers, applyMiddleware } from 'redux'
import { fork } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import { MovieSearchState, movieSearchReducer } from './movie-search-reducer'
import { movieSearchRootSaga } from './movie-search-saga'

export interface IApplicationStore {
    movieSearch: MovieSearchState
}

const reducers = combineReducers({
    movieSearch: movieSearchReducer
})

const sagas = function* rootSaga() {
    yield fork(movieSearchRootSaga)
}

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducers, undefined, applyMiddleware(logger, sagaMiddleware))

sagaMiddleware.run(sagas)
