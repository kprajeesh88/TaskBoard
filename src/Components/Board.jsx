import { useContext } from "react";
import { TaskBoardContext } from "../App";

function Board() {
  const { taskBoardData, setTaskBoardData, categories } =
    useContext(TaskBoardContext);

  const handleClick = (boardItemCategory, boardItemId) => {
    if (boardItemCategory == categories[0]) {
      setTaskBoardData((prev) => {
        let updateCategory = prev.map((prev) =>
          prev.id === boardItemId
            ? {
                ...prev,
                category: categories[1],
              }
            : prev
        );

        return updateCategory;
      });
    } else if (boardItemCategory == categories[1]) {
      setTaskBoardData((prev) => {
        let updateCategory = prev.map((prev) =>
          prev.id === boardItemId
            ? {
                ...prev,
                category: categories[2],
              }
            : prev
        );

        return updateCategory;
      });
    } else if (boardItemCategory == categories[2]) {
      setTaskBoardData((prev) => {
        let updateCategory = prev.filter((item) => item.id != boardItemId);
        return updateCategory;
      });
    }
  };

  return (
    <>
      {categories.map((category) => {
        let result = taskBoardData.filter((task) => task.category === category);
        return (
          <div className="taskColumn" key={category}>
            <div className="columnHeader">
              <h3>{category}</h3>
            </div>
            <div className="taskItems">
              {result.map((item) => {
                return (
                  <div className="taskItem" key={item.id}>
                    <p>{item.task}</p>
                    <button
                      className={
                        "taskButton " +
                        (item.category === "completed" ? "delete" : "move")
                      }
                      onClick={() => {
                        handleClick(item.category, item.id);
                      }}
                    >
                      {item.category == "completed" ? "Delete" : "Move"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Board;
