import React from 'react'

import './search-bar.scss';

interface IProps {
  value: string
  inputClassName?: string
  placeholder?: string;

  onChange: (s: string) => void
}

export const SearchBar = (props: IProps) => {
  return <div className='search-bar'>
    <input
      className={`input ${props.inputClassName || ''}`}
      type='text'
      value={props.value}
      placeholder={props.placeholder}
      onChange={e => props.onChange(e.target.value)}
    />
  </div>
}
