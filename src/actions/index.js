export const addTodo = text => ({
  type: "ADD_TODO",
  text
});

export const toggleTodo = (text, index) => ({
  type: "TOGGLE_TODO",
  text,
  index
});
