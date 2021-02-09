import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter ] = useState('all');
  useEffect(() => {
    if (localStorage.getItem("todos") !== null) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} setFilter={setFilter} />
      <Todolist todos={todos} setTodos={setTodos} filter={filter} />
    </div>
  );
}

export default App;
