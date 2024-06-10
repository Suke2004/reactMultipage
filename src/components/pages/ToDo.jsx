import React,{ useState } from "react";
import './ToDo.css';
export const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if(inputValue.trim() == ''){
      alert("Please add text!!")
    }
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    }));
  };

  
  return    <div className="todo-container">
                <h1>Todo List</h1>
                <div className="input-container">
                  <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter todo..." />
                  <button onClick={handleAddTodo}>Add</button>
                </div>
                <ul className="todo-list">
                  {todos.map((todo) => (
                    <li key={todo.id}>
                      <span>{todo.text}</span>
                      <button onClick={() => handleEditTodo(todo.id, prompt("Enter new text", todo.text))}>Edit</button>
                      <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                  ))}
                </ul>
            </div>
}