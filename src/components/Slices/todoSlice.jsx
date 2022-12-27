import { createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk("todo/fetchTodo", async (_,thunkAPI) => {
  const res = await fetch("http://localhost:3001/todo");
  const data = await res.json();
  return data;
});