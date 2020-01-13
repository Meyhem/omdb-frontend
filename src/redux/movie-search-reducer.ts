import { Action } from 'redux'

export interface MovieSearchState {
    search: string
}

const initial: MovieSearchState = {
    search: ''
}

const actionMap = {
    
}

export function movieSearchReducer(state: MovieSearchState=initial, action): MovieSearchState {
    return state
}
