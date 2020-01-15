import { actionCreatorFactory } from 'typescript-fsa'

import { IMovieThumbnail } from './movie-search-reducer'

const movieSearchFactory = actionCreatorFactory('movie-search')

export const SET_SEARCH = movieSearchFactory<string>('set-search')

export const SET_PAGE = movieSearchFactory<number>('set-page')

export const FETCH_SEARCH_MOVIES = {
    BEGIN: movieSearchFactory<{query: string, page: number}>('begin-fetch-search-movies'),
    ERROR: movieSearchFactory<Error>('error-fetch-search-movies'),
    SUCCESS: movieSearchFactory<IMovieThumbnail[] | null>('success-fetch-search-movies')
}
