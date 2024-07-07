import { useState, useEffect } from 'react'
import { TodoProvider } from './context'
import './App.css'
import { TodoForm, TodoItem } from './components'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo} ,...prev])
  }

  const updateTodo = (id, todo) => {
    // setTodos((prev) => prev.map((prevTodo) => {
    //   if(prevTodo.id == id){
    //     return todo
    //   }
    //   else{
    //     return prevTodo
    //   }
    // }))
    
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id == id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id != id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id == id) ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"))

    if(localTodos && localTodos.length>0){
      setTodos(localTodos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete, themeMode, lightTheme, darkTheme}}>
      <div className="bg-white dark:bg-[#172842] light min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <div className='flex justify-center items-center'>
                <h1 className="fixed text-2xl font-bold text-center mb-8 mt-2 text-black dark:text-white">Manage Your Todos</h1>
                <div className="w-full max-w-2xl flex mb-4 relative justify-end">
                  <ThemeBtn />
                </div>
              </div>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((individualTodo) => (
                    <div key={individualTodo.id} className='w-full'>
                      <TodoItem todo={individualTodo} />
                    </div>
                  ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
