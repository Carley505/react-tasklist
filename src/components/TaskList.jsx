
import React, { useState } from 'react'

const TaskList = (
  {
    tasks, handleChange, handleDelete
  }
) => {
  const list = tasks.map(task =>{
    return(
      <li key={task.id}>
        <Task task={task} 
              handleChange={handleChange} 
              handleDelete={handleDelete}
         />
      </li>
    )
  })
  return (
    <ul>
      {list}
    </ul>
  )
}

function Task({ 
  task, handleChange, handleDelete
 }){
  const [isEditing, setEditing] = useState(false);
  let dispayContent;

  if(isEditing){
    dispayContent = (
      <>
        <input value={task.text} onChange={(e)=>handleChange({...task, text: e.target.value})}/>
        <button onClick={()=>setEditing(false)} className='btn secondary'>Save</button>
      </>
    );
  }else{
    dispayContent = (
      <>
        <p>{task.text}</p>
        <button onClick={()=>setEditing(true)} className='btn primary'>Edit</button>
      </>
    );
  }

  return(
    <label>
      <input type='checkbox' onChange={()=>handleChange({...task, done: !task.done})} checked={task.done}/>
        {dispayContent}
      <button onClick={()=>handleDelete(task.id)} className='btn danger'>Delete</button>
    </label>
  )
 }

export default TaskList