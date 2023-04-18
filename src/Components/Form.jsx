import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { TaskBoardContext } from "../App";

function Form() {
  const unique_id = uuid();
  const { taskBoardData, setTaskBoardData, categories } =
    useContext(TaskBoardContext);
  const [newTask, setNeTask] = useState("");

  const handleNewTask = (e) => {
    setNeTask(e.target.value);
  };

  const handleAddNewTask = (e) => {
    e.preventDefault();

    setTaskBoardData((prev) => {
      return [
        ...prev,
        { id: unique_id, category: categories[0], task: newTask },
      ];
    });
  };

  return (
    <div id="taskForm">
      <h3>Add New Task</h3>
      <div className="formField">
        <input
          type="text"
          className="taskInput"
          onChange={handleNewTask}
          value={newTask}
        />
        <button className="taskSubmit" onClick={handleAddNewTask}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
