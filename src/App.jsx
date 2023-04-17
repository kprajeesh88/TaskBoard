import Board from "./Components/Board";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./Components/Header";
import data from "./BoardData";
import { useState } from "react";

function App() {
  const [taskData, setTaskData] = useState(data);
  // const [task, setTask] = useState(taskData.tasks);

  return (
    <div className="App">
      <Header />
      <Form setTaskData={setTaskData} />
      <Board taskData={taskData} setTaskData={setTaskData} />
      <Footer />
    </div>
  );
}

export default App;
