import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import { selectRepositoryList } from '../../slices/repositorySlice';
import ProfileCard from '../../components/profileCard';
import RepositoryList from '../../components/repositoryList'
import RepositoriesEmpty from '../../components/repositoriesEmpty';

const Profile = () => {

    const repositoryList = useSelector(selectRepositoryList);

    return(
        <div className='profile'>
            <ProfileCard />
            {!!repositoryList.length ? <RepositoryList /> : <RepositoriesEmpty />}
        </div>
    )
}

export default Profile;