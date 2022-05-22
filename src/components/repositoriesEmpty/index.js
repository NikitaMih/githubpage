import React from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';

//Image
import emptyImg from '../../icon/empty.svg';

const RepositoriesEmpty = () => {    

    return(
        <div className='repository-empty'>
            <img className='repository-empty__icon' width={76} height={62} src={emptyImg} alt='Empty'/>
            <p className='repository-empty__title'>Repository list is empty</p>
        </div>
    )
}

export default RepositoriesEmpty;