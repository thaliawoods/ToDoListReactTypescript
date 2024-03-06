import React, { useState } from "react";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

// todo list
export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Item[]>([
    { id: 1, text: "Finish TodoList", completed: false },
    { id: 2, text: "Clean Code", completed: false },
  ]);

  // input
  const [input, setInput] = useState<string>("");

  // toggle
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  // handleChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // handleClick
  const handleClick = () => {
    if (input.trim() !== "") {
      const newTodo: Item = { id: Date.now(), text: input, completed: false };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  // line-through
  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Add todo item" value={input} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};
