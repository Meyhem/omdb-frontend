import { reducerWithInitialState } from 'typescript-fsa-reducers'
import produce from 'immer'

import { SET_SEARCH, FETCH_SEARCH_MOVIES, SET_PAGE, FETCH_MOVIE_DETAIL, TOGGLE_MOVIE_FAVOURITE } from './movie-actions'
import { IApplicationStore } from './store'
import { lsget } from '../services/local-storage'
import { FAVOURITES_LS_KEY } from '../const'

export interface IMovieState {
    search: string
    loading: boolean
    page: number
    movieThumbnails: IMovieThumbnail[] | null

    movieDetail: IMovieDetail | null

    favourites: IMovieDetail[]
}

export interface IMovieThumbnail {
    name: string
    posterUrl: string
    year: number
    id: string
}

export interface IMovieDetail {
    id: string
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
    movieDetail: null,
    favourites: lsget(FAVOURITES_LS_KEY) || []
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
    .case(TOGGLE_MOVIE_FAVOURITE, (state, payload) => produce(state, draft => {
        const idx = draft.favourites.findIndex(v => v.id === payload.movie.id)
        if (idx < 0) {
            draft.favourites.push(payload.movie)
        } else {
            draft.favourites.splice(idx, 1)
        }
    }))
    .cases([FETCH_SEARCH_MOVIES.BEGIN], (state, payload) => produce(state, draft => {
        draft.loading = true
    }))
    .cases([FETCH_SEARCH_MOVIES.ERROR, FETCH_MOVIE_DETAIL.ERROR], (state, payload) => produce(state, draft => {
        draft.loading = false
    }))

export const selectCurrentSearchQuery = () => (state: IApplicationStore) => state.movies.search

export const selectFavourites = () => (state: IApplicationStore) => state.movies.favourites