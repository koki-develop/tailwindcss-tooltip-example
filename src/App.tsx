import React, { memo } from "react";

const App: React.FC = memo(() => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <button className="rounded border bg-white px-2 py-1 shadow transition hover:bg-gray-100">
        Button
      </button>
    </div>
  );
});

App.displayName = "App";

export default App;
