import Todo from "./components/todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="learn react" />
      <Todo text="master react" />
      <Todo text="explore react" />
    </div>
  );
}

export default App;
