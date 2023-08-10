import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Home />,
      // children: [{ path: "", element: <Products /> }],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
