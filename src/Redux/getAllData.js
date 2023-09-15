import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
export const getAllCockTails=createAsyncThunk('getAllCockTails',async(id,thunkApi)=>{
    const {rejectWithValue}=thunkApi;
    try{
        const respons=await  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
        const data=await respons.json();
        return data
    }
    catch(err){
        return rejectWithValue(err)
    }
})
export const getDetails=createAsyncThunk('getDetails',async(id,thunkApi)=>{
    const {rejectWithValue}=thunkApi;
    try{
        const respons=await  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data=await respons.json();
        return data
    }
    catch(err){
        return rejectWithValue(err)
    }
})
export const search=createAsyncThunk('search',async(id,thunkApi)=>{
    
    const {rejectWithValue}=thunkApi;
    try{
        const respons=await  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${id}
        `)
        const data=await respons.json();
        return data
    }
    catch(err){
        return rejectWithValue(err)
    }
})
const Cocktails=createSlice({
    name:'ahmed',
    initialState:{
        cocktailsArr:[],
        cocktailsDetails:[],
        loading:false,
        objDetails:{},
        arrSearch:[],
        err:''
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllCockTails.pending,(state,action)=>{
            state.loading=true
            
        })
        builder.addCase(getAllCockTails.fulfilled,(state,action)=>{
            state.loading=false;
            state.cocktailsArr=action.payload.drinks

        })
        builder.addCase(getAllCockTails.rejected,(state,action)=>{
            state.loading=false;
            
        })
        builder.addCase(getDetails.pending,(state,action)=>{
            state.loading=true
            
        })
        builder.addCase(getDetails.fulfilled,(state,action)=>{
            state.loading=false;
            
            state.cocktailsDetails=action.payload.drinks
            state.objDetails=state.cocktailsDetails[0]

        })
        builder.addCase(getDetails.rejected,(state,action)=>{
            state.loading=false;
            
        })

        builder.addCase(search.pending,(state,action)=>{
            state.loading=true
            
        })
        builder.addCase(search.fulfilled,(state,action)=>{
            state.loading=false;
            
            if (action.payload.drinks===null) {
                state.err='Sorry Your Item Is Not Found'
                state.arrSearch=[]
            }
            else{
                state.arrSearch=action.payload.drinks
            }
          


        })
        builder.addCase(search.rejected,(state,action)=>{
            
            state.loading=false;
            
        })
    }
})
export const cocktails=Cocktails.reducer