// import {  } from 'redux-saga'
import { take, fork, cancel, delay, call, put, takeLatest } from 'redux-saga/effects'

import { SET_SEARCH, FETCH_SEARCH_MOVIES } from './movie-search-actions'
import { Action } from 'typescript-fsa'
import { IMovieThumbnail } from './movie-search-reducer'

export function* movieSearchRootSaga() {
  yield fork(setSearch)

  yield takeLatest(FETCH_SEARCH_MOVIES.BEGIN.type, fetchSearchMovies)
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