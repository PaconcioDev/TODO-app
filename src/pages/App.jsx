import { CreateTodoContainer } from "@containers/CreateTodoContainer/CreateTodoContainer.jsx";
import { TodosContainer } from "@containers/TodosContainer/TodosContainer.jsx";
import { TodoProvider } from "../context/TodoContext";
import "./app.css";

function App() {
  return (
    <TodoProvider>
      <div id="app">
        <section id="create-todos-container">
          <CreateTodoContainer />
        </section>
        <section id="todos-container">
          <TodosContainer />
        </section>
      </div>
    </TodoProvider>
  );
}

export { App };
