import React from "react"
import { useSelector } from "react-redux"
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'

export default function AddTodo() {
  const todos = useSelector(state => state.todos)

  return (
    <div>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}
