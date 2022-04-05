import React, { useState } from "react";
import Todo from "./Todo";
import "../App.css";
import styled from "styled-components";
import NewFormList from "./NewFormList";

const ListItems = styled.div`
  cursor: pointer;
  li {
    list-style-type: none;
  }
  // div:nth-child(odd) {
  //   background-color: grey;
  // }
`;

const TODOS_OBJECT = [
  { id: 1, task: "Syssla 1", date: new Date(2019, 3, 1) },
  { id: 2, task: "Syssla 2", date: new Date(2019, 7, 5) },
  { id: 3, task: "Syssla 3", date: new Date(2019, 9, 6) },
  { id: 4, task: "Syssla 4", date: new Date(2020, 6, 3) },
  { id: 5, task: "Syssla 5", date: new Date(2020, 1, 8) },
];

function TodoApp(props) {
  // Add new task
  const [listItems, setListItems] = useState(TODOS_OBJECT);

  const addListHandler = (item) => {
    setListItems((prevListItems) => {
      return [item, ...prevListItems];
    });
  };

  // Adding id
  const saveDataHandler = (enterFormData) => {
    const newData = {
      ...enterFormData,
      id: Math.random().toString(),
    };
    addListHandler(newData);
    console.log(newData);
  };

  // Toggle done line (kan flyttas till Todo)
  const handleClick = (e) => {
    e.target.classList.toggle("done");
  };

  // Delete button
  const [deleteList, setDeleteList] = useState(TODOS_OBJECT);

  const deleteHandler = (id) => {
    const newArray = deleteList.filter((item) => item.id !== id);
    setDeleteList(deleteList.filter((item) => item.id !== id)); //funkar inte
    console.log(newArray);
  };

  // Ändra till ternary
  return (
    <div>
      <NewFormList onSaveData={saveDataHandler} onAdd={addListHandler} />
      <h1>Posts</h1>
      <ListItems>
        {listItems.map((todo, index, cName = "") => {
          if (index % 2 == 0) {
            cName = "odd";
            return (
              <Todo
                key={todo.id}
                todo={todo}
                handleClick={handleClick}
                deleteHandler={deleteHandler}
                cName={cName}
              />
            );
          } else {
            cName = "even";
            return (
              <Todo
                key={todo.id}
                todo={todo}
                handleClick={handleClick}
                deleteHandler={deleteHandler}
                cName={cName}
              />
            );
          }
        })}
      </ListItems>
    </div>
  );
}

export default TodoApp;
