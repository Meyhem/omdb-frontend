import { take, fork, cancel, delay, call, put, takeLatest, select } from 'redux-saga/effects'

import { SET_SEARCH, FETCH_SEARCH_MOVIES, SET_PAGE, FETCH_MOVIE_DETAIL, TOGGLE_MOVIE_FAVOURITE } from './movie-actions'
import { Action } from 'typescript-fsa'
import { IMovieThumbnail, selectCurrentSearchQuery, IMovieDetail, selectFavourites } from './movie-reducer'
import { history } from '../services/history'
import { lsset } from '../services/local-storage'
import { FAVOURITES_LS_KEY } from '../const'

export function* movieRootSaga() {
  yield fork(setSearch)

  yield takeLatest(FETCH_SEARCH_MOVIES.BEGIN.type, fetchSearchMovies)
  yield takeLatest(FETCH_MOVIE_DETAIL.BEGIN.type, fetchMovieDetail)
  yield takeLatest(SET_PAGE.type, nextPage)

  yield takeLatest(TOGGLE_MOVIE_FAVOURITE.type, storeFavourites)
}

function* nextPage(action: Action<number>) {
  const query = yield select(selectCurrentSearchQuery())

  yield put(FETCH_SEARCH_MOVIES.BEGIN({query, page: action.payload}))
}

function* setSearch() {
  let task = null
  while (true) {
    const { payload } = yield take(SET_SEARCH.type)
    if (payload.length < 5) {
      continue
    }
    if (task) {
      yield cancel(task)
    }
    task = yield fork(debouncedSearch, payload)
  }
}

function* debouncedSearch(search: string) {
  yield delay(1200)
  yield put(FETCH_SEARCH_MOVIES.BEGIN({query: search, page: 1}))
}

function* fetchSearchMovies(action: Action<{query: string, page: number}>) {
  try {

    const response = yield call(fetch, `https://www.omdbapi.com/?s=${action.payload.query}&page=${action.payload.page}&apikey=82342796`)
    const json = yield response.json()
    if (json.Error) {
      yield put(FETCH_SEARCH_MOVIES.SUCCESS(null))
      return
    }

    const mapped = json.Search.map((raw: any) => ({
      id: raw.imdbID,
      name: raw.Title,
      year: Number(raw.Year),
      posterUrl: raw.Poster === 'N/A' ? null : raw.Poster
    }) as IMovieThumbnail)

    yield put(FETCH_SEARCH_MOVIES.SUCCESS(mapped))
  } catch(e) {
    yield put(FETCH_SEARCH_MOVIES.ERROR(e))
  }
}

function* fetchMovieDetail(action: Action<{id: string}>) {
  try {
    const response: Response = yield call(fetch, `https://www.omdbapi.com/?apikey=82342796&i=${action.payload.id}`)

    const json = yield response.json()

    if (json.Error) {
      yield put(FETCH_MOVIE_DETAIL.SUCCESS(null))
      alert(`Unable to display page (${json.Error})`)
      history.push('/')
      return
    }
    const detail: IMovieDetail = {
      id: json.imdbID,
      title: json.Title,
      genre: json.Genre,
      released: json.Released,
      year: Number(json.Year),
      poster: json.Poster,
      plot: json.Plot
    }

    yield put(FETCH_MOVIE_DETAIL.SUCCESS(detail))
  } catch (e) {
    yield put(FETCH_MOVIE_DETAIL.ERROR(e))
  }
}

function* storeFavourites() {
  const favourites = yield select(selectFavourites())
  lsset(FAVOURITES_LS_KEY, favourites)
}