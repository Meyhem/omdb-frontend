import React from 'react'
import { Provider } from 'react-redux'
import { Router, Switch, Route, Link } from 'react-router-dom'
import { history } from './services/history'

import { store } from './redux/store'
import { MovieSearchContainer } from './pages/movie-search-container'
import { MovieDetailContainer } from './pages/movie-detail-container'
import { FavouritesPageContainer } from './pages/favourites-container'

const App = () => {
  return <Provider store={store}>
    <Router history={history}>
      <div className='page'>
        <header>
          <h1 className='is-size-1'>OMDB</h1>
          <nav className='nav-links'>
            <Link to='/'>Home</Link>
            &nbsp;
            <Link to='/favourites'>Favourites</Link>
          </nav>
        </header>
        <Switch>
          <Route path='/' exact={true} component={MovieSearchContainer} />
          <Route path='/movie/:id' exact={true} component={MovieDetailContainer} />
          <Route path='/favourites' exact={true} component={FavouritesPageContainer} />
        </Switch>
      </div>
    </Router>
  </Provider>
}

export default App
