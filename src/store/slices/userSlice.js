// // src/store/slices/authSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   email: '',
//   phone: '',
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setEmail: (state, action) => {
//       state.email = action.payload;
//     },
//     setPhone: (state, action) => {
//       state.phone = action.payload;
//     },
//   },
// });

// export const { setEmail, setPhone } = userSlice.actions;
// export default userSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  email: '',
  phone: '',
  name:'',
  dateOfBirth:'',
  userName:''
  
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail1: (state, action) => { state.email = action.payload; },
    setPhone1: (state, action) => { state.phone = action.payload; },
    setuName: (state, action) => { state.name = action.payload; },
    setDateOfBirth: (state, action) => { state.name = action.payload; },
    setuserName: (state, action) => { state.name = action.payload; },

  },
});
export const {
  setEmail1,
  setPhone1,
  setuName,
  setDateOfBirth,
  setuserName
} = userSlice.actions;
export default userSlice.reducer;