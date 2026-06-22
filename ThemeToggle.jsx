import React from 'react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button 
      onClick={toggleTheme} 
      className="relative p-2.5 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-zinc-700 active:scale-90"
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6 overflow-hidden">
        {/* Sun Icon — visible in Light Mode */}
        <span className="absolute inset-0 transform transition-transform duration-500 ease-in-out dark:rotate-90 dark:scale-0">
          ☀️
        </span>
        {/* Moon Icon — visible in Dark Mode */}
        <span className="absolute inset-0 transform transition-transform duration-500 ease-in-out -rotate-90 scale-0 dark:rotate-0 dark:scale-100">
          🌙
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;