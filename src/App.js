import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Купить бананы",
      favorite: false,
    },

    {
      text: "Продать квартиру",
      favorite: true,
    },

    {
      text: "Изучить JavaScript",
      favorite: false,
    },
  ]);

  const [text, setText] = useState("");

  const deleteTodo = (id) => {
    const fil = todos.filter((todo, i) => {
      if (i === id) {
        return false;
      }
      return true;
    });

    setTodos(fil);
  };

  const makeFavorite = (i) => {
    const newTodos = todos.map((todo, index) => {
      if (i === index) {
        return {
          ...todo,
          favorite: !todo.favorite,
        };
      }

      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = () => {
    if(text !== '') {
    setTodos([
      {
        text: text,
        favorite: false,
      },
      ...todos,
    ]);
    setText('')
  }
  };

  return (
    <div className="app">
      <Header />
      <Form text={text} setText={setText} addTodo={addTodo}/>
      <Todos todos={todos} makeFavorite={makeFavorite} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
