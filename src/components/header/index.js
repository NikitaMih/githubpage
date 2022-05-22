import React from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import { 
    SetRepositoryName,
    search
} from '../../slices/repositorySlice';

//Image
import searchInputImg from '../../icon/searchInput.svg'
import githubImg from '../../icon/github.svg';

const Header = () => {

    const dispatch = useDispatch();

    const onSearch = (event) => {
        if(event.keyCode === 13){
            dispatch(SetRepositoryName(event.target.value));
            dispatch(search(event.target.value));
        }   
    }

    return(
        <div className='header'>
            <img className='header__icon' width={40} height={40} src={githubImg} alt='github'/>
            <div className='find'>
                <img className='find__icon' width={16} height={16} src={searchInputImg} alt='search' />
                <input className='find__input' type='text' placeholder='Enter GitHub username' onKeyDown={onSearch}></input>
            </div>
        </div>
    )
}

export default Header;