import React from 'react'

import { IMovieSearchProps } from './movie-search-container'
import { SearchBar } from '../components/search-bar'

export const MovieSearchPage = (props: IMovieSearchProps) => {
  return <div>
    <SearchBar value={props.search} onChange={props.setSearchText} />
  </div>
}
