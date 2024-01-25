import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtodataremove } from '../Appstore/addtoSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const Body = () => {
    const addtoitems=useSelector(state=>state.items);
    const dispatch=useDispatch()
    const deletedata=(itemid)=>{
   dispatch(addtodataremove(itemid))
    }
  return (
    <div className='bg-green-600 text-white p-3  w-full mx-auto'>
{
    addtoitems && addtoitems.map((item)=>(
      <div key={item.id} className='flex justify-between border-b-2'>
    <div className='p-2 capitalize text-2xl w-full'>{item.text}</div>
    <div className='m-3'>
        <Button variant='contained' color='error'  onClick={()=>deletedata(item.id)}><DeleteIcon/></Button>
    </div>
      </div>
      
    ))
}

    </div>
  )
}

export default Body