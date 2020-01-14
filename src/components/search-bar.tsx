import React from 'react'

interface IProps {
  value: string
  onChange: (s: string) => void
}

export const SearchBar = (props: IProps) => {
  return <div className='search-bar'>
    <input type='text' value={props.value} onChange={e => props.onChange(e.target.value)} />
  </div>
}
