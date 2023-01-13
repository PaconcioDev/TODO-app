import { CreateTodoContainer } from "@containers/CreateTodoContainer/CreateTodoContainer.jsx";
import { TodosContainer } from "@containers/TodosContainer/TodosContainer.jsx";
import "./app.css";

function App() {
  return (
    <div id="app">
      <section id="create-todos-container">
        <CreateTodoContainer />
      </section>
      <section id="todos-container">
        <TodosContainer />
      </section>
    </div>
  );
}

export { App };
