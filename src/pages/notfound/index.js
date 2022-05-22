import React from 'react';
import './style.scss';
import unionImg from '../../icon/union.svg';

const NotFoundPage = () => {

    return(
        <div className='not-found'>
            <img className='not-found__icon' width={65} height={75} src={unionImg}/>
            <p className='not-found__title'>User not found</p>
        </div>
    )
}

export default NotFoundPage;