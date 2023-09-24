import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../slices/taskSlice";
import TodoRender from "./TaskRender";

const Todo = () => {

  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: "",
    description: "",
    file: "",
    status: "Todo",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    console.log(task);
    setTask({
      title: "",
      description: "",
      file: "",
      status: "Todo",
    });
    alert("Task Added Successfully")
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center ">
      <h1 className="font-bold text-[50px] text-orange-500">
        Aman's Task Manager
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-[420px] gap-6 px-3 py-3 rounded-lg bg-gray-200">
        <input
          type="text"
          placeholder="Task title"
          value={task.title}
          name="title"
          required
          onChange={handleChange}
          className="border-[3px] border-black py-2 px-3 rounded-md"
        />
        <textarea
          placeholder="Task description"
          value={task.description}
          name="description"
          required
          onChange={handleChange}
          className="border-[3px] border-black py-2 px-3 rounded-md"
        />
        <input
          type="file"
          accept="image/*,video/*"
          name="file"
          onChange={handleChange}
          className="px-1 rounded-md"
        />
        
        <div className="flex justify-between px-5 py-3 rounded-md border-[3px] border-black">
          <label for="selectInput">Select an option:</label>
          <select
            className="border-[2px] rounded-md px-4 border-black"
            name="status"
            onChange={handleChange}
          >
            <option value="Todo">Todo</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-4 rounded-md"
        >
          Add Task
        </button>
      </form>
      <h1 className="font-bold text-center text-[40px] text-orange-500">Your Added Todos</h1>
      <TodoRender />
    </div>
  );
};

export default Todo;
