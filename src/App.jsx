import React, { useState } from "react";

function App() {
  let [todolist, settodolist] = useState([]);

  // Remove a task from the todo list
  let removetask = (taskToRemove) => {
    const updatedList = todolist.filter((task) => task !== taskToRemove);
    settodolist(updatedList);
  };


  // Display the todo list
  let tododisplay = todolist.map((task) => (
      <li className="todolist1" key={task}>
      {task} &nbsp;
      <button className="Remove" onClick={() => removetask(task)}>remove</button>
    </li>
  ));
  
  // saving task in todo list
  let todosave = (event) => {
    let task = event.target.taskname.value;

    if (!todolist.includes(task)) {
      let finaltodoList = [...todolist, task];
      settodolist(finaltodoList);
    } else {
      alert(`${task} already exist`);
    }
    console.log(todolist);

    event.preventDefault();
  };

  return (
    <div className="body">
      <h1 className="heading">TODO APP</h1>
      <form onSubmit={todosave}>
        <input className="input" type="text" name="taskname" />
        <button className="btn_sve">Save</button>
      </form>
      <ul>{tododisplay}</ul>
    </div>
  );
}

export default App;
