import React from 'react'

import './toggle-button.scss'

interface IProps {
    active?: boolean
    text?: string
    onClick?: () => void
}

export const FavouriteButton = ({
    active,
    text,
    onClick
}: IProps) => {
    return <span onClick={onClick} className={`favourite-button ${active ? 'active' : ''}`}>{text}</span>
}