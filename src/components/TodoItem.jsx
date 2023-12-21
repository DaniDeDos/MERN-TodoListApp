import { useState } from "react";

const TodoItem = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function handleSubmit(e) {
      e.preventDefault();
    }
    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }
    function handleClickUpdateTodo() {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }
    function handleClickCancelTodo() {
      setNewValue(item.title);
      setIsEdit(false);
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="TodoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="buttom" onClick={handleClickUpdateTodo}>
          Actualizar
        </button>{" "}
        <button className="buttom cancelar" onClick={handleClickCancelTodo}>
          Cancelar
        </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{item.title}</span>
        <button className="buttom editar" onClick={() => setIsEdit(true)}>
          Editar
        </button>
        <button className="buttom" onClick={(e) => onDelete(item.id)}>
          Eliminar
        </button>
      </div>
    );
  }

  return <div className="Todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};

export default TodoItem;
