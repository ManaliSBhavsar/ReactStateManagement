import {createSlice,nanoid} from "@reduxjs/toolkit"

interface Todo {
    id: string;
    text: string;
}

const initialState: { todos: Todo[] } = {
    todos: [],
}

export const toDoSlice = createSlice({
    name: 'todo',
    initialState,
    //reducers
    reducers: {
        //actions
        addToDo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeToDo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id!= action.payload)
        }
    }
})

export const {addToDo,removeToDo} = toDoSlice.actions

export default toDoSlice.reducer
