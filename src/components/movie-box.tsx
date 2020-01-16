import React from 'react'

import './movie-box.scss'
import { Link } from 'react-router-dom'

interface IProps {
    name: string
    posterUrl: string
    id: string
}

export const MovieBox = (props: IProps) => {
    return <div className='movie-box box'>
        <Link to={`/movie/${props.id}`}>
            <div>
                <strong>{props.name}</strong>
            </div>
            <div className=''>
                <img src={props.posterUrl} alt='Poster' />
            </div>
        </Link>
    </div>
}