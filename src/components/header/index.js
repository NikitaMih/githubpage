import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss'

const Header = () => {

    const dispatch = useDispatch();
    
    const [input, SetInput] = useState('');
    

    const onSearch = (event) => {
        if(event.keyCode === 13){
            console.log(event.target.value);
        }
        
    }

    return(
        <div className='header'>
            <img />
            <div className='find'>
                <img className='find__img' />
                <input className='find__input' onKeyDown={onSearch}></input>
            </div>
            
        </div>
    )
}

export default Header;