
import React, { useState } from 'react'

const AddTask = ({ handleAdd }) => {
    const [text, setText] = useState("");

    function handleAddTask(e){
        e.preventDefault();

        handleAdd(text);
        setText("");
    }
  return (
    <div className='add'>
        <input placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleAddTask}>Add</button>
    </div>
  )
}

export default AddTask