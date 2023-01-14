import { CreateTodoContainer } from "@containers/CreateTodoContainer/CreateTodoContainer.jsx";
import { TodosContainer } from "@containers/TodosContainer/TodosContainer.jsx";
import { TodoProvider } from "../context/TodoContainerContext";
import "./app.css";

function App() {
  return (
    <div id="app">
      <section id="create-todos-container">
        <CreateTodoContainer />
      </section>
      <section id="todos-container">
        <TodoProvider>
          <TodosContainer />
        </TodoProvider>
      </section>
    </div>
  );
}

export { App };
