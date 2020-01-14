import { connect } from "react-redux"
import { Dispatch } from "redux"

import { IApplicationStore } from "../redux/store"
import { MovieSearchPage } from "./movie-search-page"
import { SET_SEARCH } from "../redux/movie-search-actions"


type IStateProps = ReturnType<typeof mapStateToProps>
type IDispatchProps = ReturnType<typeof mapDispatchToProps>
type IOwnProps = {}

export type IMovieSearchProps =  IStateProps & IDispatchProps & IOwnProps

const mapStateToProps = (state: IApplicationStore) => ({
  search: state.movieSearch.search
})

const mapDispatchToProps = (d: Dispatch) => ({
  setSearchText: (s: string) => d(SET_SEARCH(s))
})

export const MovieSearchContainer =
  connect<IStateProps, IDispatchProps, IOwnProps, IApplicationStore>(mapStateToProps, mapDispatchToProps)(MovieSearchPage)