
import React, { useReducer } from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

const App = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  console.log(tasks);
  function handleAddTask(text){
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task){
    dispatch({
      type: "changed",
      task: task
    });
  }

  function handeleDeleteTask(taskId){
    dispatch({
      type: "deleted",
      id: taskId
    })
  }
  return (
    <>
      <h2>My Tasks</h2>
      <AddTask handleAdd={handleAddTask} />
      <TaskList 
        tasks={tasks}
        handleChange={handleChangeTask}
        handleDelete={handeleDeleteTask}
      />
    </>
  )
}

function tasksReducer(tasks, action){
  switch(action.type){
    case "added": {
      return [
        ...tasks, {
          id: action.id,
          text: action.text,
          done: false
        }
      ];
    }
    case "changed": {
      return tasks.map(t =>{
        if(t.id === action.task.id){
          return action.task;
        }else{
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter(t =>t.id !== action.id);
    }
  }
}

let nextId = 3;

const initialTasks = [
  { id: 0, text: "Make My Bed", done: true },
  { id: 1, text: "Cook breakfast", done: false },
  { id: 2, text: "Do Workout", done: false },
]

export default App