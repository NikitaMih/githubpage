import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import { selectProfileData } from '../../slices/repositorySlice';

//Image
import followingImg from '../../icon/following.svg';
import followersImg from '../../icon/followers.svg';

const ProfileCard = () => {
    
    const avatar = useSelector(selectProfileData).avatar_url;    
    const profileName = useSelector(selectProfileData).name;
    const login = useSelector(selectProfileData).login;
    const loginURL = useSelector(selectProfileData).html_url;
    const followers = useSelector(selectProfileData).followers;
    const following = useSelector(selectProfileData).following;

    return(
        <div className='profile-card'>
            <img className='profile-card__avatar' width={280} height={280} src={avatar} alt='avatar'/>
            <h1 className='profile-card__name'>{profileName}</h1>
            <a className='profile-card__login' href={loginURL}>{login}</a>
            <div className='profile-card__followers'>
                <div className='profile-card__followers-block'>
                    <img width={16} height={16} src={followingImg} />
                    <span>{followers} followers</span>
                </div>
                <div className='profile-card__followers-block'>
                    <img width={26} height={26} src={followersImg} />
                    <span>{following} following</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;