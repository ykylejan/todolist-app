import React from 'react'
import tick from '../assets/tick.png';
import nottick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggleTodo }) => {
  return (
    <div className='flex items-start my-3 gap-2'>
      {/* Toggle Complete Icon and Text */}
      <div 
        onClick={() => { toggleTodo(id); }} 
        className='flex flex-1 items-start cursor-pointer gap-2'
      >
        <img src={isComplete ? tick : nottick} alt="" className='w-7' />
        <p className={`text-slate-700 text-[17px] ${isComplete ? "line-through" : ""} break-words`}>
          {text}
        </p>
      </div>

      {/* Delete Icon */}
      <img 
        onClick={() => { deleteTodo(id); }} 
        src={delete_icon} 
        alt="delete" 
        className='w-5 cursor-pointer ml-8 self-start'
      />
    </div>
  );
};

export default TodoItems