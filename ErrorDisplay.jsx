import React from 'react';

const ErrorDisplay = ({ message = "An error occurred.", onRetry }) => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
      <div className="relative mb-6">
        
        <div className="absolute inset-0 scale-75 animate-pulse rounded-full bg-red-100 dark:bg-red-950/35 blur-xl"></div>
        
        
        <div className="relative flex h-24 w-24 animate-bounce items-center justify-center rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50 text-red-500 dark:text-red-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-12 w-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>
      </div>

      
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">
        Oh no! An error has occurred
      </h2>
      <p className="mt-2 max-w-md text-sm text-gray-500 dark:text-gray-400">
        {message}
      </p>

      
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-red-500 active:scale-95 dark:bg-red-700 dark:hover:bg-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          let's try again
        </button>
      )}
    </div>
  );
};

export default ErrorDisplay;