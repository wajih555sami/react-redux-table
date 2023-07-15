import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from '../features/components/countries'

export const store = configureStore({
    reducer: {
        countries: countriesReducer
    }
})