import React from 'react'
import { MdCheck, MdDeleteForever } from 'react-icons/md'

const TodoList = ({key,data,onhandleDelete,onHandleChecked,checked}) => {
  return (
    <li key={key} className='todo-item'>
    <span className={checked ? "checkList":"notcheckList"}>{data}</span>
    <button className='check-btn' onClick={()=>onHandleChecked(data)} >
        <MdCheck/>
        </button>
    <button className='delete-btn'
    onClick={()=>onhandleDelete(data)}><MdDeleteForever/></button>

</li>
  )
}

export default TodoList