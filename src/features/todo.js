import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
todos : [{
        id: 1,
        text : "Hello mate "
    }]
}

export const todoSlice = createSlice({
       name : 'todo',
       initialState,
       reducers :{
        addtodo : (state,action) =>{
            const todo  ={
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodos :(state,action)=> {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

       }
    
    
    }

)

export const {addtodo,removeTodos} = todoSlice.actions
export default todoSlice.reducer