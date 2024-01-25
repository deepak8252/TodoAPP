import { configureStore } from "@reduxjs/toolkit";
import addtoreducer from "./addtoSlice"
const store=configureStore({
  reducer:addtoreducer
})
export default store