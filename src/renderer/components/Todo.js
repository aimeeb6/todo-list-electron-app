import React from 'react';

const Todo = ({todo, setTodos, todos, display}) => {
    let handleCheck = (e) => {
       let id = e.target.parentElement.getAttribute("id");
       setTodos(todos.map((todo) => {
           if (todo.id == id){
               return {
                ...todo, 
                completed: !todo.completed,
               };
           }
           return todo;
       })
     );
    }

    let handleDelete = (e) => {
        let todo_item = e.target.parentElement
        let id = todo_item.getAttribute("id");
        setTodos((todos.filter(todo => todo.id != id))));
     }

    return (
        <div className="todo" id={todo.id}>
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}> {todo.text} </li>
                <button className="check-btn" onClick={handleCheck}> 
                    <i className="far fa-check-square" ></i>
                </button>
                <button className="delete-btn" onClick={handleDelete}> 
                    <i className="fas fa-trash" ></i>
                </button>
            
        </div>
    );
}

export default Todo;