import React from 'react'
import { Provider } from 'react-redux'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './services/history'

import { store } from './redux/store'
import { MovieSearchContainer } from './pages/movie-search-container'
import { MovieDetailContainer } from './pages/movie-detail-container'

const App = () => {
  return <Provider store={store}>
    <div className='page'>
      <section>
        <h1 className='is-size-1'>OMDB - Demo app</h1>
      </section>
      <Router history={history}>
        <Switch>
          <Route path='/' exact={true}>
            <MovieSearchContainer />
          </Route>
          <Route path='/movie/:id' exact={true}>
            <MovieDetailContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  </Provider>
}

export default App
