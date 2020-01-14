import { reducerWithInitialState } from 'typescript-fsa-reducers'
import produce from 'immer'

import { SET_SEARCH } from './movie-search-actions'

export interface MovieSearchState {
    search: string
}

const initial: MovieSearchState = {
    search: ''
}

export const movieSearchReducer = reducerWithInitialState(initial)
    .case(SET_SEARCH, (state, payload) => produce(state, draft => {
        draft.search = payload
    }))
