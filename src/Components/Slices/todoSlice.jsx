import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchTodo = createAsyncThunk("todo/fetchTodo", async (_,thunkAPI) => {
    const res = await fetch("http://localhost:3001/todo");
    const data = await res.json();
    return data;
  });
  const TodoSlice = createSlice({
    name: "todo",
    initialState: {
      todo: [],
      loading:false,
    },
  
    extraReducers: {
      //affichage
      [fetchTodo.pending]: (state, action) => {
        state.loading = true;
      },
      [fetchTodo.fulfilled]: (state, action) => {
        state.loading = false;
        state.todo = action.payload;
      },
      [fetchTodo.rejected]: (state, action) => {
        state.loading = false;
      },
    },
});
export default TodoSlice;