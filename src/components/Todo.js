import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";

const Div = styled.div`
  font-size: 14px;
  display: flex;
  width: 500px;

  li {
    width: 600px;
    margin-bottom: 2px;
    height: 30px;
    line-height: 30px;
    padding-left: 15px;
    radius-left: 10px;
    border-radius: 20px;
  }

  button {
    background-color: darkcyan;
    color: white;
    border: none;
    width: 180px;
    height: 30px;
    margin-left: 2px;
    border-radius: 30px;
  }

  button:hover {
    background-color: #016b6b;
  }

  i {
    color: grey;
    // font-size: 12px;
    margin-left: 30px;
  }
`;

// Version 1 - with change-button
function Todo({ todo, handleClick, deleteHandler, cName }) {
  const [task, setTask] = useState(todo.task);
  const [date, setDate] = useState(todo.date);

  const updateTaskHandler = () => {
    setTask("Klar");
    setDate((todo.date = new Date(2022, 4, 5))); // ?? Dagens datum
  };

  const month = todo.date.toLocaleString("en-US", { month: "long" });
  const day = todo.date.toLocaleString("en-US", { day: "2-digit" });
  const year = todo.date.getFullYear();

  return (
    <Div>
      <li className={cName} onClick={handleClick} date={todo.date}>
        {task}{" "}
        <i>
          {year} {month} {day}
        </i>
      </li>

      <button onClick={updateTaskHandler}>Klar</button>
      <button onClick={() => deleteHandler(todo.id)}>Delete!</button>
    </Div>
  );
}

export default Todo;
