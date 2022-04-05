import React, { useState } from "react";
import styled from "styled-components";

const FormDiv = styled.div`
  input {
    display: block;
    margin-bottom: 20px;
    width: 200px;
  }

  button {
    background-color: darkcyan;
    color: white;
    border: none;
    width: 200px;
    height: 30px;
    margin: 20px 0px;
    border-radius: 20px;
  }

  button:hover {
    background-color: #016b6b;
  }
`;

function NewFormList(props) {
  const [enterTask, setEnterTask] = useState("");
  const [enterDate, setEnterDate] = useState("");

  const addTaskHandler = (event) => {
    setEnterTask(event.target.value);
  };

  const addDateHandler = (event) => {
    setEnterDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted!");

    const newData = {
      task: enterTask,
      date: new Date(enterDate),
    };

    props.onSaveData(newData);
    setEnterTask("");
    setEnterDate("");
  };

  return (
    <FormDiv>
      <h1>Fyll i ny syssla</h1>
      <form onSubmit={submitHandler}>
        <label>Syssla</label>
        <input type="text" value={enterTask} onChange={addTaskHandler} />
        <label>Datum</label>
        <input
          type="date"
          onChange={addDateHandler}
          min="2020-01-01"
          max="2022-12-31"
          value={enterDate}
        />
        <button type="submit">Lägg till</button>
      </form>
    </FormDiv>
  );
}

export default NewFormList;

// // Från föreläsning 5/4
// const [input, setInput] = useState({
//   task: '',
//   date: ''
// })
// <input name="task" value={input.enterTask} />
// <input value={input.enterDate} />

// const addTaskHandler = (event) => {
//   setInput({
//     ...input,
//     enterTask: event.target.value,
//   })
// };

// const handleChange = (e) => {
//   const fieldName = e.target.name
//   const fieldValue = e.target.value === 'checkbox' ?   e.target.checked : e.target.value

//   setInput(
//     ...input,
//     [fieldName]: fieldValue
//   )
// }
