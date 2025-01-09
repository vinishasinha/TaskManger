import React, {  useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';
import { getLocalStorageData, setLocalStorageData } from './TodoLocalStorage';
//import './App.css';


const Todo = () => {
   
    const[task,setTask]=useState(()=>getLocalStorageData());
  
    const handleFormSubmit=(input)=>{
      const{id,content,checked}=input;
        if(!content) return;
        // if(task.includes(input)) return;
        const ContentMatch=task.find((curElem)=>curElem.content===content);
        if(ContentMatch) return;
    
        setTask((prev)=>[...prev,{id,content,checked}]);
        
        // console.log(input);
        
    }

    //delete
    const handleDeleteTodo=(value)=>{
      const updateTask=task.filter((curElem)=>curElem.content!==value );
      setTask(updateTask)
    }
    //claer all
    const handleClearTodo=()=>{
        setTask([])
    }
    //todo checked
    const handleCheckedTodo=(content)=>{
        const updatedTask=task.map((curElem)=>{
            if(curElem.content===content){
                return {...curElem,checked:!curElem.checked}
            }else{
                return curElem;
            }

        })
        setTask(updatedTask);

    }

    //localstorage
    setLocalStorageData(task)
   
 
        
    
  return ( 
    <section className='todo-container'>
        <header>
            <h1>Task Manager</h1>
            <TodoDate/>
        </header>
        <TodoForm onAddTodo={handleFormSubmit}/>
        <section className='myUnOrderList'>
            <ul>
                {
                    task.map((curElem,index)=>{
                        return <TodoList 
                        key={curElem.id} 
                        onhandleDelete={handleDeleteTodo} 
                        onHandleChecked={handleCheckedTodo} 
                        data={curElem.content}
                        checked={curElem.checked}/>
                    })
                }

            </ul>
        </section>
        <section >
            <button className='clear-btn' onClick={handleClearTodo}>Clear All</button>

        </section>

    </section>
  )
}

export default Todo