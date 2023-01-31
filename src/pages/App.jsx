import { CreateTodoContainer } from "@containers/CreateTodoContainer/CreateTodoContainer.jsx";
import { TodosContainer } from "@containers/TodosContainer/TodosContainer.jsx";
import { TodoProvider } from "../context/TodoContext";
import "./app.css";

function App() {
  return (
    <TodoProvider>
      <div id="app">
        <CreateTodoContainer />
        <TodosContainer />
      </div>
    </TodoProvider>
  );
}

export { App };
