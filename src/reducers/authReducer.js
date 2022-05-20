// import { types } from "../types/type";
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        time: 0,
        nombre: '',
        username: '',
        rol: '',
        id: ''
    },
    reducers: {
        setlogin: (state, action) =>{
            state.token = action.payload.access_token;
            state.nombre = action.payload.name;
            state.username = action.payload.username;
            state.time = action.payload.time;
            state.tipo = action.payload.tipo;
            state.rol = action.payload.rol;
            state.id = action.payload.id;
        },
        setlogout: (state) =>{
            state.token = '';
            state.nombre = '';
            state.username = '';
            state.time = 0;
        }
    }
});

export const { setlogin, setlogout } = dataSlice.actions;


export default dataSlice.reducer;