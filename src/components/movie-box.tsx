import React from 'react'

import './movie-box.scss'

interface IProps {
    name: string
    posterUrl: string
    id: string
}

export const MovieBox = (props: IProps) => {
    return <div className='movie-box box'>
        <div>
            <strong>{props.name}</strong>
        </div>
        <div className=''>
            <img src={props.posterUrl} alt='Poster' />
        </div>
    </div>
}