import { connect } from "react-redux"
import { Dispatch } from "redux"

import { IApplicationStore } from "../redux/store"
import { MovieSearchPage } from "./movie-search-page"
import { SET_SEARCH, SET_PAGE } from "../redux/movie-actions"

type IStateProps = ReturnType<typeof mapStateToProps>
type IDispatchProps = ReturnType<typeof mapDispatchToProps>
type IOwnProps = {}

export type IMovieSearchProps =  IStateProps & IDispatchProps & IOwnProps

const mapStateToProps = (state: IApplicationStore) => ({
  ...state.movies
})

const mapDispatchToProps = (d: Dispatch) => ({
  setSearchText: (s: string) => d(SET_SEARCH(s)),
  setPage: (p: number) => d(SET_PAGE(p))
})

export const MovieSearchContainer =
  connect<IStateProps, IDispatchProps, IOwnProps, IApplicationStore>(mapStateToProps, mapDispatchToProps)(MovieSearchPage)
