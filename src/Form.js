import React from 'react';

const Form = (props) => {
    return (
        <div className="form">
        <input
          placeholder="Введите текст..."
          type="text"
          value={props.text}
          onChange={(e) => props.setText(e.target.value)}
        ></input>
        <button onClick={props.addTodo}>Добавить</button>
      </div>
    );
};

export default Form;