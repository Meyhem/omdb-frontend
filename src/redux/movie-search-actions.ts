import { actionCreatorFactory } from 'typescript-fsa'

const movieSearchFactory = actionCreatorFactory('movie-search')

export const SET_SEARCH = movieSearchFactory<string>('movie-search')
