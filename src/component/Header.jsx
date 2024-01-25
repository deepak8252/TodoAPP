import React, { useState } from 'react'
import {  useDispatch } from 'react-redux';
import { addtodo } from '../Appstore/addtoSlice';
import Button from '@mui/material/Button';
import Menu from './Menu';
import { TextField } from '@mui/material';
const Header = () => {
    const[text,settext]=useState();
    const dispatch=useDispatch();
 const handleadd=(e)=>{
    e.preventDefault()
    dispatch(addtodo(text));
    settext("");
 }
  return (  
   <>
    <Menu/>
    <div className=' lg:9/12 sm:6/12 sm:w-full  mx-auto shadow-lg p-2 bg-gray-300'>
        <form action="" onSubmit={handleadd} className='mx-auto'>
        <TextField id="standard-basic" label="Add to do list " variant="standard" value={text}onChange={(e)=>{
            settext(e.target.value)
           }} />
            
           <button  > <Button variant='contained' color='success'>submit</Button></button>
        </form>
    </div>
   </>
  )
}

export default Header