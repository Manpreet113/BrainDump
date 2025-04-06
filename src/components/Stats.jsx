import { useState, useEffect } from "react";

function Stats() {
  const [stats, setStats] = useState({ notes: 0, tasks: 0, completedTasks: 0, ideas: 0 });

  useEffect(() => {
    const updateStats = () => {
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const ideas = JSON.parse(localStorage.getItem("ideas")) || [];
      const completedTasks = tasks.filter((task) => task.done).length;

      setStats({
        notes: notes.length,
        tasks: tasks.length,
        completedTasks,
        ideas: ideas.length,
      });
    };

    updateStats();
    // Simple polling for demo; ideally use a context or event listener
    const interval = setInterval(updateStats, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
        📊 Stats
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">Notes</p>
          <p className="text-lg font-medium">{stats.notes}</p>
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">Tasks</p>
          <p className="text-lg font-medium">{stats.tasks}</p>
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
          <p className="text-lg font-medium">{stats.completedTasks}</p>
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">Ideas</p>
          <p className="text-lg font-medium">{stats.ideas}</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;