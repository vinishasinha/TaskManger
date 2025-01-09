import React, { useEffect, useState } from 'react'

const TodoDate = () => {
    const[DateTime,setDateTime]=useState("");
    useEffect(()=>{
        const interval =setInterval(()=>{
            getDateTime();
          },1000);

          return ()=>clearInterval(interval);
    })


    const getDateTime=()=>{
    const now= new Date();
    const FormattedDate =now.toLocaleDateString();
    const time =now.toLocaleTimeString();
    setDateTime(`${FormattedDate}-${time}`)
    };


  return (
    <h2 className='date-time'>{DateTime}</h2>
  )
}

export default TodoDate