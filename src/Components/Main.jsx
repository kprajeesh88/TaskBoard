import { useContext } from "react";
import { TaskBoardContext } from "../App";
import Board from "./Board";

function Main() {
  const { taskBoardData, setTaskBoardData, categories } =
    useContext(TaskBoardContext);

  return (
    <>
      <div id="taskBoard">
        <Board />
      </div>
    </>
  );
}

export default Main;
