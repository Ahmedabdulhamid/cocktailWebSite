import {configureStore}from '@reduxjs/toolkit'
import { cocktails } from './getAllData'
export const store=configureStore({
    reducer:{
        cocktails
    }
})