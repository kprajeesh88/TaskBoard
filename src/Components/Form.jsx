import { useState } from "react";
import { v4 as uuid } from "uuid";

function Form({ setTaskData }) {

  const [newItem, setNewItem] = useState("");

  const handleNewTask = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddNewTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuid(),
      task: newItem,
      category: "pending",
    };

    setTaskData((prev) => {
      console.log("prev", prev);
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });

    console.log(newTask);
  };

  return (
    <div id="taskForm">
      <h3>Add New Task</h3>
      <div className="formField">
        <input
          type="text"
          className="taskInput"
          onChange={handleNewTask}
          value={newItem}
        />
        <button className="taskSubmit" onClick={handleAddNewTask}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
