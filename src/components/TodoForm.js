import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

export default function TodoForm({ todos }) {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        if (todo.length === 0) {
          return;
        }

        dispatch(addTodo(todo));
        setTodo("");
      }}
    >
      <input value={todo} onChange={event => setTodo(event.target.value)} />
      <button type="submit">Add todo</button>
    </form>
  );
}
