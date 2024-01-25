import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState={
items:[],
}
const addtoSlice=createSlice({
    name:"addtodo",
     initialState,
     reducers:{
        addtodo:(state,action)=>{
            const todo={
            id:nanoid(),
            text:action.payload,
            }
            state.items.push(todo)
        },
       addtodataremove:(state,action)=>{
      state.items=state.items.filter((item)=>item.id !==action.payload);
       },
     }
});
export const {addtodataremove,addtodo}=addtoSlice.actions
export default addtoSlice.reducer;
