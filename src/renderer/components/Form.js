import React from "react";

const Form = ({ todos , setTodos, setFilter }) => {

  const inputTextHandler = (e) => {
    e.preventDefault();
    let todoinput = document.getElementById('todo-input');
    if(todoinput.value != ''){
      setTodos([...todos, {text: todoinput.value, completed: false, id: Math.random() * 100}]); 
    }
    todoinput.value = '';
  };

  const handleFilterChange = (e) =>{
    setFilter(e.target.value)
  }
  return (
    <form>
      <input type="text" id="todo-input" className="todo-input" />
      <button className="add-todo-btn" onClick={inputTextHandler} >
        <i className="far fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
