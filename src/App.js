import React from "react";
import NavLayout from "./components/NavLayout";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import DashBoardHome from "./pages/dashBoard/DashBoardHome";
import HomePage from "./pages/HomePage";
import DashBoard from "./pages/dashBoard/DashBoard";
import Team from "./pages/dashBoard/Team";
import Invoices from "./components/Invoices";
import Contacts from "./components/Contacts";
import Form from "./components/Form";
import Calendar from "./components/Calendar";
import Bar from "./components/Bar";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
import FAQ from "./components/Faq.js";
// import Geography from "./pages/geography";


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
      {/* DashBoardHome is the demo App.js 
          DashBoardHome has the side bar and top bar
        */}
      <Route path="dashboardhome" element={<DashBoardHome />}>
        <Route index element={<DashBoard />} />
        <Route path="team" element={<Team />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="form" element={<Form />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="bar" element={<Bar />} />
        {/* <Route path="pie" element={<Pie />} /> */}
        {/* <Route path="line" element={<Line />} /> */}
        <Route path="faq" element={<FAQ />} />
        {/* <Route path="geography" element={<Geography />} /> */}
      </Route>
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
