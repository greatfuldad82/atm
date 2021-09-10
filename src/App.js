import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
const LOCAL_STORAGE_KEY = 'todoApp.todos'


function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => useState )

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
      const name = todoNameRef.current.value
      if (name === '') return
      setTodos(prevTodos => {
        return [...prevTodos, {id: 1, name: name, complete: false}]
      })
      console.log(name)
      todoNameRef.current.value = null 

  }

  return ( 
    <> 
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
 