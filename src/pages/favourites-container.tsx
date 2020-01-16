import { connect } from "react-redux"
import { RouteComponentProps } from "react-router-dom"
import { Dispatch } from "redux"

import { IApplicationStore } from "../redux/store"
import { FavouritesPage } from "./favourites-page"
import { IMovieDetail } from "../redux/movie-reducer"
import { TOGGLE_MOVIE_FAVOURITE } from "../redux/movie-actions"

type IStateProps = ReturnType<typeof mapStateToProps>
type IDispatchProps = ReturnType<typeof mapDispatchToProps>
type IOwnProps = {} & RouteComponentProps<{ id: string }>

export type IFavouriesPageProps = IStateProps & IDispatchProps & IOwnProps

const mapStateToProps = (state: IApplicationStore, props: IOwnProps) => ({
  movies: state.movies.favourites
})

const mapDispatchToProps = (d: Dispatch) => ({
  toggleFavourite: (movie: IMovieDetail) => d(TOGGLE_MOVIE_FAVOURITE({ movie }))
})

export const FavouritesPageContainer =
  connect<IStateProps, IDispatchProps, IOwnProps, IApplicationStore>(mapStateToProps, mapDispatchToProps)(FavouritesPage)