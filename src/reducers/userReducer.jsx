// const INITIAL_STATE={
//       user: null,
// };

// const userReducer=(state=INITIAL_STATE,action) => {
//   switch (action.type){
//     default:
//       return state;
//   }
// };

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;


//stateupdater