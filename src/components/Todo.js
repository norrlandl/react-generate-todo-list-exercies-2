import React, { useState } from "react";
import "../App.css";
// import Delete from "./Delete";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  width: 500px;
  li {
    width: 300px;
  }
`;

const Dates = styled.i`
  color: grey;
  font-size: 12px;
  margin-top: 5px;
`;

// Version 1 - with change-button
function Todo({ todo, handleClick, deleteHandler, cName }) {
  const [task, setTask] = useState(todo.task);

  const updateTaskHandler = () => {
    setTask("Uppdaterad!");
    // console.log(task);
  };

  const month = todo.date.toLocaleString("en-US", { month: "long" });
  const day = todo.date.toLocaleString("en-US", { day: "2-digit" });
  const year = todo.date.getFullYear();

  return (
    <Div>
      <li className={cName} onClick={handleClick} date={todo.date}>
        {task}{" "}
        <Dates>
          {year} {month} {day}
        </Dates>
      </li>

      <button onClick={updateTaskHandler}>Uppdatera!</button>
      <button onClick={() => deleteHandler(todo.id)}>Delete!</button>
    </Div>
  );
}

export default Todo;
