import React from 'react'
import { IMovieDetailProps } from './movie-detail-container'
import { Spinner } from '../components/spinner'
import { FavouriteButton } from '../components/toggle-button'

import './movie-detail-page.scss'


export const MovieDetailPage = ({
  id,
  movie,
  loading,
  isFavourite,

  toggleFavourite,
  fetchMovie
}: IMovieDetailProps) => {

  React.useEffect(() => {
    fetchMovie(id)
  }, [id, fetchMovie])

  return <div className='container movie-detail-page'>
    <div className='columns'>
      <div className='column is-4' />
      {loading && <div className='column is-4'>
        <Spinner />
      </div>
      }
      {!loading && <div className='card favourite-card column is-4'>
        <div className='card-image'>
          <figure className='image is-3by4'>
            <img src={movie?.poster} alt='Poster' />
          </figure>
        </div>
        <div className='card-content'>
          <div className='media'>
            <div className='media-content'>
              <p className='title is-4'>{movie?.title}
                <FavouriteButton text='★' active={isFavourite} onClick={() => toggleFavourite(movie!)} />
              </p>
              <p className='subtitle'>{movie?.year}</p>
            </div>
          </div>

          <div className='content'>
            <p>{movie?.genre}</p>
            <p>{movie?.plot}</p>
            <br />
            <time dateTime='2016-1-1'>{movie?.released}</time>
          </div>
        </div>
      </div>}
    </div>
  </div>
}
