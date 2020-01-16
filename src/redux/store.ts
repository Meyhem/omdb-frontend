import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux'
import { fork } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import { IMovieState, movieReducer } from './movie-reducer'
import { movieRootSaga } from './movie-saga'

export interface IApplicationStore {
    movies: IMovieState
}

const reducers = combineReducers({
    movies: movieReducer
})

const sagas = function* rootSaga() {
    yield fork(movieRootSaga)
}

const sagaMiddleware = createSagaMiddleware()
const middlewares: Middleware[] = [sagaMiddleware]
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(reducers, undefined, applyMiddleware(...middlewares))

sagaMiddleware.run(sagas)
