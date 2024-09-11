import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  email: '',
  phone: '',
  name:'',
  dateOfBirth:'',
  userName:'',
  token:'',
  
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail1: (state, action) => {
      console.log('Setting email:', action.payload); // Log email being set
      state.email = action.payload;
    },
    setPhone1: (state, action) => {
      console.log('Setting phone:', action.payload); // Log phone being set
      state.phone = action.payload;
    },
    setuName: (state, action) => {
      console.log('Setting name:', action.payload); // Log name being set
      state.name = action.payload;
    },
    setDateOfBirth: (state, action) => {
      console.log('Setting date of birth:', action.payload); // Log date of birth being set
      state.dateOfBirth = action.payload;
    },
    setuserName: (state, action) => {
      console.log('Setting username:', action.payload); // Log username being set
      state.userName = action.payload;
    },
    setToken: (state, action) => {
      console.log('Setting token:', action.payload); // Log token being set
      state.token = action.payload;
    },

  },
});
export const {
  setEmail1,
  setPhone1,
  setuName,
  setDateOfBirth,
  setuserName,
  setToken,
} = userSlice.actions;
export default userSlice.reducer;