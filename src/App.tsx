import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
      <h1>Kanban TaskBoard</h1>

      <div className="columnDivs">
        <h2>Todo</h2>
      </div>
      <div className="columnDivs">
        <h2>In Progress</h2>
        <TaskCard />
      </div>
      <div className="columnDivs">
        <h2>Done</h2>
      </div>
    </>
  );
}

export default App;
