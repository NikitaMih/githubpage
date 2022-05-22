import React from 'react';
import './style.scss';

//Image
import searchImg from '../../icon/search.svg';

const InitialPage = () => {

    return(
        <div className='initial'>
            <img className='initial__icon' width={64} height={64} src={searchImg} alt='search'/>
            <p className='initial__title'>Start with searching a GitHub user</p>
        </div>
    )
}

export default InitialPage;