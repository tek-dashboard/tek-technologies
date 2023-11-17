import React from "react";
import NavLayout from "./components/NavLayout";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import DashBoard from "./pages/DashBoard";
import HomePage from "./pages/HomePage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route index element={<HomePage />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="dashboard" element={<DashBoard />} />
    </Route>
  )
);

class App extends React.Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}

export default App;
