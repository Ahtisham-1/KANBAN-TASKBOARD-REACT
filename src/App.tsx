import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
      <h1>Kanban TaskBoard</h1>
      <main>
        <div className="columnDivs">
          <h2>Todo</h2>
        </div>
        <div className="columnDivs">
          <h2>In Progress</h2>
          <TaskCard
            title="Clean Kitchen"
            description="Clean the kitchen fully"
            tag="hard"
          />
        </div>
        <div className="columnDivs">
          <h2>Done</h2>
          <TaskCard
            title="Do homework"
            description="Do the homework of maths"
            tag="tommorow homework check"
          />
          <TaskCard
            title="Fix Fee Calculation"
            description="Ensure balance updates after payment"
            tag="FeeEase Bug"
          />
        </div>
      </main>
    </>
  );
}

export default App;
