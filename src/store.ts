import { createStore, combineReducers } from 'redux'

export interface ApplicationStore {
    movieSearch: MovieSearchState
}

const reducers = combineReducers

export const store = createStore()