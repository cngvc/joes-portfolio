import RootLayout from "./components/root-layout";
import Main from "./pages/main";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/404";
import CVRedirect from "./pages/cv";
import Email from "./pages/send-email";
import { internal } from "./urls";

const resumePaths = ["/resume", "/cv"];
const router = createBrowserRouter([
  {
    path: internal.home,
    element: <Main />,
    errorElement: <NotFound />,
  },
  {
    path: internal.email,
    element: <Email />,
    errorElement: <NotFound />,
  },
  ...resumePaths.map((path) => ({
    path: path,
    element: <CVRedirect />,
  })),
]);

function App() {
  return (
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  );
}

export default App;
