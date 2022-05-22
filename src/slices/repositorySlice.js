import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    repositoryName: "",
    profileData: {},
    repositoryList: [],
    history: '',
    error: false,
}

export const repositorySlice = createSlice({
  name: 'Repository',
  initialState,
  reducers: {
    SetRepositoryName: (state, action) => {
        state.repositoryName = action.payload;
    },
    SetProfileData: (state, action) => {
      state.profileData = action.payload;
    },
    SetRepositoryList: (state, action) => {
      state.repositoryList = action.payload;
    },
    SetHistory: (state, action) => {
      state.history = action.payload;
    },
    SetError: (state, action) => {
      state.error = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { SetRepositoryName, SetProfileData, SetRepositoryList, SetHistory, SetError } = repositorySlice.actions;

// Selectors
export const selectRepositoryName = (state) => state.repository.repositoryName;
export const selectProfileData = (state) => state.repository.profileData;
export const selectRepositoryList = (state) => state.repository.repositoryList;
export const selectHistory = (state) => state.repository.history;
export const selectError = (state) => state.repository.error;

// Thunk actions 
export const search = (repositoryName) => {
  return async (dispatch) => {
    try{
      const res = await axios.get(`https://api.github.com/users/${repositoryName}`);
      dispatch(SetProfileData(res.data));
      dispatch(SetHistory(`/${repositoryName}`));
      dispatch(searchRepositories(repositoryName, 1));
    } catch {
      dispatch(SetHistory('/notfound'));
      dispatch(SetError(true));
    }
  }
}

export const searchRepositories = (repositoryName, page) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`https://api.github.com/users/${repositoryName}/repos?per_page=4&page=${page}`);
      dispatch(SetRepositoryList(res.data));
    } catch {
      dispatch(SetHistory('/notfound'));
      dispatch(SetError(true));
    }
  }
  }

export default repositorySlice.reducer;