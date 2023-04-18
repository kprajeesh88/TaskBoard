import Board from "./Components/Main";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./Components/Header";
import data from "./BoardData";
import { createContext, useState } from "react";
import Main from "./Components/Main";

export const TaskBoardContext = createContext();

function App() {
  const [taskBoardData, setTaskBoardData] = useState(data.tasks);
  const [categories, setCategories] = useState(data.categories);

  return (
    <div className="App">
      <Header />
      <TaskBoardContext.Provider
        value={{ taskBoardData, setTaskBoardData, categories }}
      >
        <Form />
        <Main />
      </TaskBoardContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
