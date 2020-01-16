import { actionCreatorFactory } from 'typescript-fsa'

import { IMovieThumbnail, IMovieDetail } from './movie-reducer'

const movieSearchFactory = actionCreatorFactory('movie-search')

export const SET_SEARCH = movieSearchFactory<string>('set-search')

export const SET_PAGE = movieSearchFactory<number>('set-page')

export const FETCH_SEARCH_MOVIES = {
    BEGIN: movieSearchFactory<{query: string, page: number}>('BEGIN_FETCH_SEARCH_MOVIES'),
    ERROR: movieSearchFactory<Error>('ERROR_FETCH_SEARCH_MOVIES'),
    SUCCESS: movieSearchFactory<IMovieThumbnail[] | null>('SUCCESS_FETCH_SEARCH_MOVIES')
}

export const FETCH_MOVIE_DETAIL = {
    BEGIN: movieSearchFactory<{id: string}>('BEGIN_FETCH_MOVIE_DETAIL'),
    ERROR: movieSearchFactory<Error>('ERROR_FETCH_MOVIE_DETAIL'),
    SUCCESS: movieSearchFactory<IMovieDetail | null>('SUCCESS_FETCH_MOVIE_DETAIL')
}
