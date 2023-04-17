function Board({ taskData: { categories, tasks }, setTaskData }) {
  // console.log("categories", categories);
  // console.log("tasks", tasks);

  const handleClick = (boradItemCategory, boradItemId) => {
    console.log(boradItemCategory, boradItemId);
    // if (boradItemCategory == "completed") {
    // }
  };

  return (
    <div id="taskBoard">
      {categories.map((category) => {
        let result = tasks.filter((task) => task.category === category);
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
                    {/* <p style={{ color: "yellow" }}>{item.category}</p> */}
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
    </div>
  );
}

export default Board;
