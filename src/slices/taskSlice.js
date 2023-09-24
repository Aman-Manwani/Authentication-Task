import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [{
    id:1,
    title:"YouTube is an American online video sharing and social media platform headquartered in San Bruno, California, United States. Accessible worldwide, it was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google and is the second most visited website, after Google Search.",
    description:"YouTube is an American online video sharing and social media platform headquartered in San Bruno, California, United States. Accessible worldwide, it was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google and is the second most visited website, after Google Search.",
    file: '',
    status:'Doing',
  }],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState:initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        file: action.payload.file,
        status: action.payload.status,
      };
      state.tasks.push(task);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      console.log('hii');
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
