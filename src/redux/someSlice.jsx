import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: 1, 
                text: action.payload.text,
                completed: false
            })
        },
        removeTodo(state, action) {
            // here the function code
        },
        toggleTodoComplete(state, action) {
            // here the function code
        },
    },
});

export const [addTodo, removeTodo, toggleTodoComplete] = todoSlice.actions;
export default todoSlice.reducer;