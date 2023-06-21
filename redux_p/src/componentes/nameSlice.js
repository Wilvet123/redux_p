import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
  };
  const persons = ['Beulah', 'Yvette', 'Grace', 'Ada', 'Bamibo'];


export const nameSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        usernames: (state) => {
            state.users.push(...persons)
         },
        
    }
})

export const {usernames} = nameSlice.actions
export default nameSlice.reducer