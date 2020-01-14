import React from 'react'

import { IMovieSearchProps } from './movie-search-container'
import { SearchBar } from '../components/search-bar'
import { MovieBox } from '../components/movie-box'
import { Spinner } from '../components/spinner'

import './movie-search-page.scss'


export const MovieSearchPage = (props: IMovieSearchProps) => {
  return <div className='page movies-search-page'>
    <section>
      <h1 className='is-size-1'>OMDB - Demo app</h1>
    </section>
    <section className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <div className="card">
            <div className="card-content">
              <div className="content">
                <div className="control">
                  <SearchBar
                    value={props.search}
                    inputClassName={`is-large ${props.movieThumbnails === null ? 'is-danger' : ''}`}
                    placeholder='Enter movie title'
                    onChange={props.setSearchText}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='container movie-box-container'>
      {props.loading && <Spinner />}
      <div className="columns is-multiline">

        {!props.loading &&
          props.movieThumbnails &&
          props.movieThumbnails.map(movie =>
            <div className='column is-mobile-full is-one-fifth'>
              <MovieBox
                key={movie.id}
                name={movie.name}
                id={movie.id}
                posterUrl={movie.posterUrl}
              />
            </div>
          )}

      </div>
    </section>
  </div>
}
