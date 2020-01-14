import { actionCreatorFactory } from 'typescript-fsa'

import { IMovieThumbnail } from './movie-search-reducer'

const movieSearchFactory = actionCreatorFactory('movie-search')

export const SET_SEARCH = movieSearchFactory<string>('movie-search')


export const FETCH_SEARCH_MOVIES = {
    BEGIN: movieSearchFactory<{query: string, page: number}>('begin-fetch-search-movies'),
    ERROR: movieSearchFactory<Error>('error-fetch-search-movies'),
    SUCCESS: movieSearchFactory<IMovieThumbnail[] | null>('success-fetch-search-movies')
}
