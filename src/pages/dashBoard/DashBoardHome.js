// import React, { Component } from "react";
// import { withAuth0 } from "@auth0/auth0-react";
// import { ColorModeContext, useMode } from "../../theme.js";
// import { CssBaseline, ThemeProvider } from "@mui/material";

// class DashBoardHome extends Component {

//   getTheme = () => {
//     const [theme, colorMode] = useMode();
//   }

//  ComponentDidMount = () => {
//   this.getTheme();
//  }

//   render() {
//     return (
//       <ColorModeContext.Provider value={colorMode}>
//         <ThemeProvider theme={theme}>
//           <section className="app">
//             <h1>Secret Cats!</h1>
//           </section>
//         </ThemeProvider>
//       </ColorModeContext.Provider>
//     );
//   }
// }

// export default withAuth0(DashBoardHome);

import { withAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import { ColorModeContext, useMode } from "../../theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from '../controlBars/TopBar.js';
import Sidebar from "../controlBars/SideBar.js";


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
        
         
          
          
       
            <h1>Secret Cats!</h1>
          </main>
        </section>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default withAuth0(DashBoardHome);
