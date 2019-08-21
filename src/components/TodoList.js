import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../actions";

export default function TodoList({ todos }) {
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map(({ text, completed }, index) => (
        <li
          key={index}
          onClick={event => {
            event.preventDefault();
            dispatch(toggleTodo(text, index));
          }}
        >
          {completed ? "COMPLETED - " : null}
          {text}
        </li>
      ))}
    </ul>
  );
}
