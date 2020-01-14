import React from 'react'
import { Provider } from 'react-redux'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './services/history'

import { store } from './redux/store'
import { MovieSearchContainer } from './pages/movie-search-container'

const App = () => {
  return <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/'>
          <MovieSearchContainer />
        </Route>
      </Switch>
    </Router>
  </Provider>
}

export default App
