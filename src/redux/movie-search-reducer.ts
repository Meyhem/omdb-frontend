import { reducerWithInitialState } from 'typescript-fsa-reducers'
import produce from 'immer'

import { SET_SEARCH, FETCH_SEARCH_MOVIES, SET_PAGE } from './movie-search-actions'
import { IApplicationStore } from './store'

export interface IMovieSearchState {
    search: string
    loading: boolean
    page: number
    movieThumbnails: IMovieThumbnail[] | null
}

export interface IMovieThumbnail {
    name: string
    posterUrl: string
    year: number
    id: string
}

const initial: IMovieSearchState = {
    search: '',
    page: 1,
    loading: false,
    movieThumbnails: []
}

export const movieSearchReducer = reducerWithInitialState(initial)
    .case(SET_SEARCH, (state, payload) => produce(state, draft => {
        draft.search = payload
        draft.movieThumbnails = []
        draft.page = 1
    }))
    .case(SET_PAGE, (state, payload) => produce(state, draft => {
        draft.page = payload
    }))
    .case(FETCH_SEARCH_MOVIES.BEGIN, (state, payload) => produce(state, draft => {
        draft.loading = true
    }))
    .case(FETCH_SEARCH_MOVIES.SUCCESS, (state, payload) => produce(state, draft => {
        draft.movieThumbnails = payload
        draft.loading = false
    }))
    .cases([FETCH_SEARCH_MOVIES.ERROR], (state, payload) => produce(state, draft => {
        draft.loading = false
    }))

export const selectCurrentSearchQuery = () => (state: IApplicationStore) => state.movieSearch.search