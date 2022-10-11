import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routers/router";
function App() {
  return (
    <div className="App bg-slate-600">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
