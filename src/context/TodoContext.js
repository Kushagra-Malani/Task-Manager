import { createContext , useContext }from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg", // this ' todo ' is the title displayed in each todo task
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// useTodo is a custom hook
export function useTodo() {
    return useContext(TodoContext)  // now, when we can access the values of TodoContext by using useTodo
}

export const TodoProvider = TodoContext.Provider