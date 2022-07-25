import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
    name: 'UserName',
    initialState: "",
    reducers: {
        input: function(state,actions){
            return actions.payload
        }

    }
})

export const {input} = userNameSlice.actions;

export default userNameSlice.reducer;