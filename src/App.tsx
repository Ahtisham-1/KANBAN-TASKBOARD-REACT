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
  const [title, setTitle] = useState<string>("");
  const [select, setSelect] = useState<string>("todo");
  const [description, setDescription] = useState<string>("");
  const [tag, setTag] = useState<string>("easy");
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
      id: 7,
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

  function addTask() {
    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      tag: tag,
      column: select,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setDescription("");
    setTag("");
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <h1>Kanban TaskBoard</h1>

      <div className="form-area">
        <input
          type="text"
          placeholder="Enter your task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <select value={tag} onChange={(e) => setTag(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="todo">Todo</option>
        <option value="progress">progress</option>
        <option value="done">Done</option>
      </select>
      <button onClick={addTask}>Add task</button>
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
              id={item.id}
              onDelete={deleteTask}
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
              id={item.id}
              onDelete={deleteTask}
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
              id={item.id}
              onDelete={deleteTask}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
