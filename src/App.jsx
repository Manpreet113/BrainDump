import { useState } from "react";
import NoteDump from "./components/NoteDump";
import TaskTracker from "./components/TaskTracker";
import IdeaBoard from "./components/IdeaBoard";
import Stats from "./components/Stats";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} transition-colors duration-300`}>
      <header className="pt-6 px-6 flex justify-center">
        <div className="flex items-center justify-between border fixed w-5/6 backdrop-blur-xs dark:backdrop-blur-xs rounded-full px-4 py-2 shadow-md">
          <h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-secondary)' }}>BrainDump</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </header>
      <main className="max-w-3xl mx-auto p-6 space-y-8">
        <p className="text-center text-lg text-gray-600 dark:text-gray-400">
          Declutter your mind, one dump at a time.
        </p>
        <NoteDump />
        <TaskTracker />
        <IdeaBoard />
        <Stats />
      </main>
    </div>
  );
}

export default App;