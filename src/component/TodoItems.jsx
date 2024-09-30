import React from 'react'
import tick from '../assets/tick.png';
import nottick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggleTodo }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        
        <div onClick={()=>{toggleTodo(id)}} className='flex flex-1 items-center 
        cursor-pointer '>
            <img src={isComplete? tick : nottick} alt="" className='w-7'/>
            <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>

        <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" className='w-3.5 cursor-pointer'/>

    </div>
  )
}

export default TodoItems