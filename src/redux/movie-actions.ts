import { actionCreatorFactory } from 'typescript-fsa'

import { IMovieThumbnail, IMovieDetail } from './movie-reducer'

const movieActionFactory = actionCreatorFactory('movie-search')

export const SET_SEARCH = movieActionFactory<string>('set-search')

export const SET_PAGE = movieActionFactory<number>('set-page')

export const FETCH_SEARCH_MOVIES = {
    BEGIN: movieActionFactory<{query: string, page: number}>('BEGIN_FETCH_SEARCH_MOVIES'),
    ERROR: movieActionFactory<Error>('ERROR_FETCH_SEARCH_MOVIES'),
    SUCCESS: movieActionFactory<IMovieThumbnail[] | null>('SUCCESS_FETCH_SEARCH_MOVIES')
}

export const FETCH_MOVIE_DETAIL = {
    BEGIN: movieActionFactory<{id: string}>('BEGIN_FETCH_MOVIE_DETAIL'),
    ERROR: movieActionFactory<Error>('ERROR_FETCH_MOVIE_DETAIL'),
    SUCCESS: movieActionFactory<IMovieDetail | null>('SUCCESS_FETCH_MOVIE_DETAIL')
}

export const TOGGLE_MOVIE_FAVOURITE = movieActionFactory<{movie: IMovieDetail}>('SET_MOVIE_FAVOURITE')
