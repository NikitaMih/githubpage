import React from 'react';
import Header from '../../components/header';
import Navigator from '../../navigation/navigator';
import './style.scss';

const MainPage = () => {

    return(
        <div className='wrapper'>
            <Header/>
            <Navigator />
        </div>
    )
}

export default MainPage;