import { configureStore } from '@reduxjs/toolkit';
import userName from './slices/userName.slice.jsx'; //Lo importamos

export default configureStore({
    reducer: {
        userName // Lo añadimos
	}
})