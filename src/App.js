import "./App.css";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskAdd from "./TaskAdd";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/task-add",
      element: <TaskAdd />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
