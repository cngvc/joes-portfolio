import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { internal } from "./urls";
import NotFound from "./pages/404";

const router = createBrowserRouter([
  {
    path: internal.home,
    element: <Home />,
    errorElement: <NotFound />,
  },
]);

function App() {
  return (
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  );
}

export default App;
