import { withAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import { ColorModeContext, useMode } from "../../theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from '../controlBars/TopBar.js';
import Sidebar from "../controlBars/SideBar.js";
import DashBoard from "../dashBoard/DashBoard.js";
// import Team from '../dashBoard/Team.js';
import {  Outlet } from 'react-router-dom';


function DashBoardHome() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <section className="app">
        <Sidebar isSidebar={isSidebar} />
          <main className="content">
          <TopBar setIsSidebar={setIsSidebar} />
            {/* <h1>Secret Cats!</h1> */}
            
        
            {/* <Team /> */}
           
            <Outlet />
          </main>
         
        </section>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default withAuth0(DashBoardHome);
