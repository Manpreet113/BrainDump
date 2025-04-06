import { useState, useEffect } from "react";

function TaskTracker() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <section className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
        ✅ Task Tracker
      </h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a task..."
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
      <ul className="mt-3 space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center p-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded"
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              className="mr-2 h-4 w-4 text-blue-500 rounded"
            />
            <span className={task.done ? "line-through text-gray-500 dark:text-gray-400" : ""}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaskTracker;