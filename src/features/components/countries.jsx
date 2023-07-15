import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    country:[]
}

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        //form add 
        add:(state, action)=>{
            state.country.unshift(action.payload);
        },
        // set list after request 
        set:(state, action)=>{
          state.country = action.payload  
        },
        // action { payload:[id,newData] }
        edit:(state, action)=>{
          const index = state.country.findIndex((item)=>item.id == action.payload[0])
          state[index] = action.payload[1]
        }
    }
})


export const { add, set, edit} = countriesSlice.actions;
export default countriesSlice.reducer;