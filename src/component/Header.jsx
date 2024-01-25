import React, { useState } from 'react'
import {  useDispatch } from 'react-redux';
import { addtodo } from '../Appstore/addtoSlice';
const Header = () => {
    const[text,settext]=useState();
    const dispatch=useDispatch();
 const handleadd=(e)=>{
    e.preventDefault()
    dispatch(addtodo(text));
    settext("");
 }
  return (
    <div className=' w-6/12 mx-auto shadow-lg p-2 bg-gray-300'>
        <h2 className=' capitalize bg-blue-800 text-white m-4 p-4 text-2xl text-center' >to do app</h2>
        <form action="" onSubmit={handleadd}>
           <input type="text" className=' border-gray-600 w-9/12 p-4  rounded border-2' placeholder='enter your todo list' value={text} onChange={(e)=>{
            settext(e.target.value)
           }} />
           <button className=' bg-teal-800 text-white px-2 py-3 m-3 capitalize text-2xl mx-3 text-center' >submit </button>
        </form>
    </div>
  )
}

export default Header