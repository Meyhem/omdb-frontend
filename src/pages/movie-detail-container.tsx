import { connect } from "react-redux"
import { Dispatch } from "redux"

import { IApplicationStore } from "../redux/store"
import { MovieDetailPage } from "./movie-detail-page"
import { RouteComponentProps } from "react-router-dom"
import { FETCH_MOVIE_DETAIL, TOGGLE_MOVIE_FAVOURITE } from "../redux/movie-actions"
import { IMovieDetail } from "../redux/movie-reducer"

type IStateProps = ReturnType<typeof mapStateToProps>
type IDispatchProps = ReturnType<typeof mapDispatchToProps>
type IOwnProps = {} & RouteComponentProps<{id: string}>

export type IMovieDetailProps =  IStateProps & IDispatchProps & IOwnProps

const mapStateToProps = (state: IApplicationStore, props: IOwnProps) => ({
  id: props.match.params.id,
  movie: state.movies.movieDetail,
  loading: state.movies.loading,
  isFavourite: !!state.movies.favourites.find(m => m.id === props.match.params.id)
})

const mapDispatchToProps = (d: Dispatch) => ({
  fetchMovie: (id: string) => d(FETCH_MOVIE_DETAIL.BEGIN({id})),
  toggleFavourite: (movie: IMovieDetail) => d(TOGGLE_MOVIE_FAVOURITE({movie}))
})

export const MovieDetailContainer =
  connect<IStateProps, IDispatchProps, IOwnProps, IApplicationStore>(mapStateToProps, mapDispatchToProps)(MovieDetailPage)