import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className="todos">
      {props.todos.map((todo, i) => {
        return <Todo 
        key={i}
        todo={todo} 
        i={i}
        makeFavorite={props.makeFavorite}
        deleteTodo={props.deleteTodo}
        />;
      })}
    </div>
  );
};

export default Todos;
