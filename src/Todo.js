import React from 'react';

const Todo = (props) => {
    return (
              <div className={`todo ${props.todo.favorite ? "selected" : ""}`}>
                <div className="favorite">
                  <button onClick={() => props.makeFavorite(props.i)}>★</button>
                </div>
                <div className="todo-text">{props.todo.text}</div>
                <div className="actions">
                  <button onClick={() => props.deleteTodo(props.i)}>×</button>
                </div>
              </div>
            );
};

export default Todo;