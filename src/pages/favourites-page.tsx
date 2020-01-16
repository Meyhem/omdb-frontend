import React from 'react'
import { Link } from 'react-router-dom'

import { IFavouriesPageProps } from './favourites-container'
import { FavouriteButton } from '../components/toggle-button'

import './favourites-page.scss'

export const FavouritesPage = (props: IFavouriesPageProps) => {
  return <div className='container favourites-page'>
    <div className='columns'>
      <div className='column is-4' />
      <div className='column is-4'>
        {props.movies.map(m => <div className='card favourite-movie-card' key={m.id}>
          <div className="card-content">
            <div className="media-content">
              <p className="title is-4"><Link to={`/movie/${m.id}`}>{m.title}</Link></p>
              <p className="subtitle is-6">{m.plot}</p>
            </div>
          </div>
          <footer className='card-footer'>
            <div className="card-footer-item"></div>
            <div className="card-footer-item">
              <FavouriteButton text='🗑' active={true} onClick={() => props.toggleFavourite(m)} />
            </div>
            <div className="card-footer-item"></div>
          </footer>
        </div>)}
        {!props.movies.length && <span>No favourited movies. <Link to='/'>Search</Link> for some</span>}
      </div>
    </div>
  </div>

}