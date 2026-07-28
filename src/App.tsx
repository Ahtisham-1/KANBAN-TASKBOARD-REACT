import TaskCard from "./components/TaskCard";

function App() {
  const tasks = [
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
  ];

  return (
    <>
      <h1>Kanban TaskBoard</h1>
      <main>
        <div className="columnDivs">
          <h2>Todo</h2>
          {tasks
            .filter((task) => task.column === "todo")
            .map((item) => (
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
          {tasks
            .filter((task) => task.column === "progress")
            .map((item) => (
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
          {tasks
            .filter((task) => task.column === "done")
            .map((item) => (
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
