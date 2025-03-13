import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/404";
import CVRedirect from "./pages/CV";
import Email from "./pages/Email";
import { internal } from "./urls";

const router = createBrowserRouter([
  {
    path: internal.home,
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: internal.email,
    element: <Email />,
    errorElement: <NotFound />,
  },
  {
    path: internal.cv,
    element: <CVRedirect />,
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
