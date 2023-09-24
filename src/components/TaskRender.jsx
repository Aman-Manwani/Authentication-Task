import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../slices/taskSlice";

const TodoRender = () => {
  const tasks = useSelector((state) => state.taskReducer.tasks);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-5 ">
      {tasks.map((task) => {
        return (
          <div
            key={task.id}
            className="flex flex-col bg-slate-300 rounded-xl w-[650px]  gap-5 px-7 py-3"
          >
            <div>
              <p className="font-bold text-[20px]">Title :</p>
              <div className="font-semibold text-gray-600"> {task.title}</div>
            </div>
            <div>
              <p className="font-bold text-[20px]">Description :</p>
              <div className="font-semibold text-gray-600">
                {task.description}
              </div>
            </div>
            <div className="flex gap-2  items-center justify-between ">
              <p className="font-bold text-[20px]">Status :</p>
              <div className="font-semibold text-gray-600">{task.status}</div>
            </div>
            <button
              className="bg-white text-orange-500 font-bold px-3 py-2 rounded-md"
              onClick={() => dispatch(removeTask(task.id))}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoRender;
