import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    selectRepositoryName,
    selectProfileData,
    selectRepositoryList,
    searchRepositories
} from '../../slices/repositorySlice';
import RepositoryCard from '../repositoryCard';
import './style.scss';
import {
    Pagination,
    Stack,
  } from "@mui/material";

const RepositoryList = () => {

    const dispatch = useDispatch();
    const repositoryName = useSelector(selectRepositoryName);
    const RepositoryList = useSelector(selectRepositoryList);
    const RepositoriesCount = useSelector(selectProfileData).public_repos;
    
    const pagesAll = Math.ceil(RepositoriesCount / 4);

    const [page, setPage] = useState(1);
    const [from, SetFrom] = useState(1);
    const [to, SetTo] = useState(RepositoriesCount <= 4 ? RepositoriesCount: 4);

    useEffect(() => {
        dispatch(searchRepositories(repositoryName, page));
        SetFrom((page * 4 - 4) > 1 ? (page * 4 - 4) : 1);
        SetTo((page * 4) <= RepositoriesCount ? (page * 4) : RepositoriesCount);
      }, [page]);

    return(
        <div className='repositoryList'>
            <h2 className='repositoryList__title'>Repositories ({RepositoriesCount})</h2>
            <div>
                {RepositoryList.map(el => <RepositoryCard key={el.id} title={el.name} url={el.html_url} description={el.description} />)}
            </div>
            <div className='pages'>
                <div className='pages__count'>{from} - {to} of {RepositoriesCount} items</div>
                <Stack spacing={2}>
                {!!pagesAll && (
                    <Pagination
                        count={pagesAll}
                        page={page}
                        onChange={(_, num) => setPage(num)}
                        boundaryCount={1}
                        siblingCount={1} 
                    />
                )}
                </Stack>
            </div>
        </div>
        
    )
}

export default RepositoryList;