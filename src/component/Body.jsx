import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtodataremove } from '../Appstore/addtoSlice';
 
const Body = () => {
    const addtoitems=useSelector(state=>state.items);
    const dispatch=useDispatch()
    const deletedata=(itemid)=>{
   dispatch(addtodataremove(itemid))
    }
console.log(addtoitems+"hello");
  return (
    <div className='bg-green-600 text-white p-3  w-6/12 mx-auto'>
{
    addtoitems && addtoitems.map((item)=>(
      <div key={item.id} className='flex justify-between'>
    <div className='p-2 capitalize text-2xl'>{item.text}</div>
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