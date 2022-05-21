import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    repositorie: "",
}

export const repositorieSlice = createSlice({
  name: 'Repositorie',
  initialState,
  reducers: {
    SetRepositorie: (state, action) => {
        state.repositorie = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { SetRepositorie } = repositorieSlice.actions;

// Selectors
export const selectRepositorie = (state) => state.repositorie.repositorie;

// Thunk actions 
export const search = (repositorie) => {
//   return async (dispatch) => {
//     try{
//       const res = await axios.get(baseUrl + `/profile?login=${login}`);
//       password === res.data[0].password ? dispatch(SetHistory()) : dispatch(SetError(true));
//     } catch {
//       dispatch(SetError(true));
//     }
//   }
}

export default repositorieSlice.reducer;