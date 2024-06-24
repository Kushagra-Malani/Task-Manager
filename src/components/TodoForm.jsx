import React, { useState } from 'react';
import { useTodo } from '../context';

function TodoForm() {
    const [todo, setTodo] = useState("") // defining state for an individual todo
    const {addTodo} = useTodo()
    // now, we make a method which add's a todo in addTodo
    const add = (e) => {
        e.preventDefault()
        if(!todo) return; // if todo is empty then return
        else{   // if todo is not empty
//          addTodo(todo) ---> this is wrong as todo should be an object but here todo is a string. So, we pass an object in addTodo. If we see App.jsx, we find that addTodo takes only an object.
            addTodo({ /*id: Date.now(),*/ todo:todo, completed: false})  // no need to give id:Date.now() as we have already given it in addTodo in App.jsx
            setTodo("")
        }
    }


    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;