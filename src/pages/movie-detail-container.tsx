import { connect } from "react-redux"
import { Dispatch } from "redux"

import { IApplicationStore } from "../redux/store"
import { MovieDetailPage } from "./movie-detail-page"

type IStateProps = ReturnType<typeof mapStateToProps>
type IDispatchProps = ReturnType<typeof mapDispatchToProps>
type IOwnProps = {}

export type IMovieDetailProps =  IStateProps & IDispatchProps & IOwnProps

const mapStateToProps = (state: IApplicationStore) => ({

})

const mapDispatchToProps = (d: Dispatch) => ({

})

export const MovieDetailContainer =
  connect<IStateProps, IDispatchProps, IOwnProps, IApplicationStore>(mapStateToProps, mapDispatchToProps)(MovieDetailPage)