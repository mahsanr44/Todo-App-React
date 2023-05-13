import React, { useState } from "react";
import TodoImg from "./Images/todo.png";

const Todo = () => {

  const [InputData, setInputData] =useState("")
  const [Task, setTask]= useState([])

  const AddTask=()=>{
    if(!Task)
    {
      alert("Please Enter Task")
    }
    else{
      const newTaskFormat={
        id:new Date().getTime().toString(),
        name:InputData
      };
      setTask([...Task,newTaskFormat])
      setInputData("")
    }
  }

  const deleteTask = (index)=>{
    const updatedTasks=Task.filter((item)=>{
      return item.id!==index;
    })
    setTask(updatedTasks)
  }

  const deleteAllTask = ()=>{
    return setTask([])
  }

  return (
    <>
      <div className="px-96 py-52 ">
        <div className="justify-between flex flex-col items-center text-white">
          {/* Image  */}
          <div className="pb-9">
            <img src={TodoImg} alt="todo" height={50} width={50} />
          </div>

          {/* Input Field */}
          <div className="pb-9 pt-3">
            <div class="relative">
              <input
                type="search"
                id="search"
                value={InputData}
                onChange={(event)=>setInputData(event.target.value)}
                class="block w-full p-3 px-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="✍️ Add Task"
              />
              <button
              onClick={AddTask}
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-3   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                +
              </button>
            </div>
          </div>

          {/* Show all Items */}
          <div className="pb-6">
            {
              Task.map((task)=>{
                return(
            <div  key={task.id} className="flex mb-1 justify-between items-center border-gray-600 border-[1px] p-2 rounded-sm">
              <div className="pr-20">
                  
                <p>{task.name}</p>
             
            </div>

              <div className="pl-10">
                <button className="inline-flex  p-1.5 bg-blue-500 rounded-md hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>

                <button onClick={()=>deleteTask(task.id)} className="inline-flex m-0.5 items-center p-1.5 bg-red-600 hover:bg-red-700 hover:rounded-3xl text-white text-sm font-medium rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
               )
              })
            }
          </div>

          {/* Check List Button */}
          <div className="border-2 p-2 bg-white hover:border-black text-gray-500 hover:bg-blue-500 hover:text-white font-semibold">
            <button onClick={deleteAllTask} className="uppercase"> Remove All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
