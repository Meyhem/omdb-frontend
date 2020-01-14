// import {  } from 'redux-saga'
import { take, fork, call, cancel, delay } from 'redux-saga/effects'

import { SET_SEARCH } from './movie-search-actions'

export function* movieSearchRootSaga() {
  yield fork(setSearch)
}

function* setSearch() {
  let task = null
  while (true) {
    const { payload } = yield take(SET_SEARCH.type)
    if (task) {
      yield cancel(task)
    }
    task = yield fork(debouncedSearch, payload)
  }
}

function* debouncedSearch(search: string) {
  yield delay(2000)
  alert('trig' + search)
}
