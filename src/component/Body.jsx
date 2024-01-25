import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtodataremove } from '../Appstore/addtoSlice';
 
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
      <div key={item.id} className='flex justify-between'>
    <div className='p-2 capitalize text-2xl w-full'>{item.text}</div>
    <div>
        <button className='bg-red-600 p-2 capitalize text-2xl my-3' onClick={()=>deletedata(item.id)}>delete</button>
    </div>
      </div>
      
    ))
}

    </div>
  )
}

export default Body