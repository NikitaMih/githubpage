import React from 'react';
import './style.scss';

const RepositoryCard = ({title, url, description}) => {

    return(
        <div className='repository-card'>
            <a className='repository-card__title' target="_blank"  href={url}>{title}</a>
            <p className='repository-card__description'>{description}</p>
        </div>
    )
}

export default RepositoryCard;