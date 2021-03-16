import React, { Fragment } from "react";
import "./App.css";

//components

import InputTodo from "./components/InputTodo";
//import EditTodo from "./components/EditTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <div className="container">
      <Fragment>
        <InputTodo />
        <ListTodo />
      </Fragment>
    </div>
  );
}

export default App;
