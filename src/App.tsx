import React, { memo } from "react";

const App: React.FC = memo(() => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <span className="relative">
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white before:absolute before:-bottom-1 before:right-0 before:left-0 before:m-auto before:w-0 before:border-4 before:border-b-0 before:border-transparent before:border-t-black before:content-['']">
          Hello World
        </span>

        <button className="rounded border bg-white px-2 py-1 shadow transition hover:bg-gray-100">
          Button
        </button>
      </span>
    </div>
  );
});

App.displayName = "App";

export default App;
