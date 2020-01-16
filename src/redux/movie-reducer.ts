import { reducerWithInitialState } from 'typescript-fsa-reducers'
import produce from 'immer'

import { SET_SEARCH, FETCH_SEARCH_MOVIES, SET_PAGE, FETCH_MOVIE_DETAIL } from './movie-actions'
import { IApplicationStore } from './store'

export interface IMovieState {
    search: string
    loading: boolean
    page: number
    movieThumbnails: IMovieThumbnail[] | null

    movieDetail: IMovieDetail | null
}

export interface IMovieThumbnail {
    name: string
    posterUrl: string
    year: number
    id: string
}

export interface IMovieDetail {
    title: string
    year: number
    released: string
    genre: string
    poster: string
    plot: string
}

const initial: IMovieState = {
    search: '',
    page: 1,
    loading: false,
    movieThumbnails: [],
    movieDetail: null
}

export const movieReducer = reducerWithInitialState(initial)
    .case(SET_SEARCH, (state, payload) => produce(state, draft => {
        draft.search = payload
        draft.movieThumbnails = []
        draft.page = 1
    }))
    .case(SET_PAGE, (state, payload) => produce(state, draft => {
        draft.page = payload
    }))
    .case(FETCH_SEARCH_MOVIES.SUCCESS, (state, payload) => produce(state, draft => {
        draft.movieThumbnails = payload
        draft.loading = false
    }))
    .case(FETCH_MOVIE_DETAIL.SUCCESS, (state, payload) => produce(state, draft => {
        draft.movieDetail = payload
        draft.loading = false
    }))
    .case(FETCH_MOVIE_DETAIL.BEGIN, (state, payload) => produce(state, draft => {
        draft.loading = false
        draft.movieDetail = null
    }))

    .cases([FETCH_SEARCH_MOVIES.BEGIN], (state, payload) => produce(state, draft => {
        draft.loading = true
    }))
    .cases([FETCH_SEARCH_MOVIES.ERROR, FETCH_MOVIE_DETAIL.ERROR], (state, payload) => produce(state, draft => {
        draft.loading = false
    }))

export const selectCurrentSearchQuery = () => (state: IApplicationStore) => state.movies.search