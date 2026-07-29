import TaskCard from "./components/TaskCard";
import { useState } from "react";
interface Task {
  id: number;
  title: string;
  description: string;
  tag: string;
  column: string;
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Clean Kitchen",
      description: "Clean the kitchen fully",
      tag: "easy",
      column: "progress",
    },
    {
      id: 2,
      title: "wash face",
      description: "wash you dirty face",
      tag: "easy",
      column: "progress",
    },
    {
      id: 3,
      title: "running",
      description: "run 100 meters",
      tag: "Medium",
      column: "done",
    },
    {
      id: 4,
      title: "fighting",
      description: "do some sparring",
      tag: "hard",
      column: "done",
    },
    {
      id: 5,
      title: "fighting",
      description: "do some sparring",
      tag: "hard",
      column: "todo",
    },
    {
      id: 6,
      title: "fighting",
      description: "do some sparring",
      tag: "hard",
      column: "todo",
    },
    {
      id: 8,
      title: "fighting",
      description: "do some sparring",
      tag: "hard",
      column: "todo",
    },
  ]);

  const filterTodosColumn = tasks.filter((task) => task.column === "todo");
  const filterProgressColumn = tasks.filter(
    (task) => task.column === "progress",
  );
  const filterDoneColumn = tasks.filter((task) => task.column === "done");

  return (
    <>
      <h1>Kanban TaskBoard</h1>
      <main>
        <div className="columnDivs">
          <h2>Todo</h2>
          {filterTodosColumn.length === 0 && <p>No tasks yet</p>}
          {filterTodosColumn.map((item) => (
            <TaskCard
              key={item.id}
              title={item.title}
              description={item.description}
              tag={item.tag}
            />
          ))}
        </div>
        <div className="columnDivs">
          <h2>In Progress</h2>
          {filterProgressColumn.length === 0 && <p>No tasks yet</p>}
          {filterProgressColumn.map((item) => (
            <TaskCard
              key={item.id}
              title={item.title}
              description={item.description}
              tag={item.tag}
            />
          ))}
        </div>
        <div className="columnDivs">
          <h2>Done</h2>
          {filterDoneColumn.length === 0 && <p>No tasks yet</p>}
          {filterDoneColumn.map((item) => (
            <TaskCard
              key={item.id}
              title={item.title}
              description={item.description}
              tag={item.tag}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
