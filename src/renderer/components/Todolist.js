import React from 'react';
import Todo from './Todo';

const Todolist = ({todos, setTodos, filter}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
              {todos.map((todo) => (
                  <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>
              ))}
            </ul>
        </div>
    )
}

export default Todolist;