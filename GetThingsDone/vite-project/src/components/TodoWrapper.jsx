import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import React from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm'


const TodoWrapper = () => {

  const [todos, setTodos] = useState([])


  const addTodo = todo => {
    setTodos([...todos, { id: uuid(), task: todo, completed: false, isEditing: false }])
    console.log(todos)

  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }


  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }


  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className='TodoWrapper'>
      <h2>My ToDo List</h2>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo,index) =>


        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  )
}

export default TodoWrapper