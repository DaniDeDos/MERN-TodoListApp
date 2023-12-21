import { useState, useCallback } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (title.trim() === "") {
        return;
      }

      const newTodo = {
        id: crypto.randomUUID(),
        title,
        completed: false,
      };

      setTodos((prevTodos) => [newTodo, ...prevTodos]);
      setTitle("");
    },
    [title]
  );

  const handleUpdate = useCallback((id, value) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, title: value } : item
      )
    );
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  }, []);

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" placeholder="..." value={title} />
        <input type="submit" value="Crear Lista" className="buttonCreate" />
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
//----------------------------------------------------
