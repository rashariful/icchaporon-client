import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";



function App() {
  return (
    <div className="App bg-[#F8F9FD]">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
