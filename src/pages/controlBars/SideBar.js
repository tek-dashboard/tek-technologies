import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Icon, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme.js";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.pallet.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <link to={to} />
    </MenuItem>
  );
};
const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.pallette.mode);
  const [isCollapsed, setIsCollapsed] = useState("false");
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-sidebar-wrapper": { backgroundColor: "transparent !important" },
        "& .pro-sidebar-item": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-inner-item:hover": { color: "#1db5f5 !important" },
        "& .pro-inner-item:active": { color: "#868dfb !important" },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography>ADMIN dash</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/CRAIGB.jpg`}
                  style={{cursor: "pointer",borderRadius: "50%"}}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  colors={colors.grey[100]}
                  fontWeight="bold"
                  sx={{m: "10px 0 0 0"}}
                >
                tek admin name
                </Typography>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                  VP AUTH LEVEL
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="dashboardhome"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
             />
            <Typography
             variant="h6"
             color={colors.grey[300]}
             sx={{m: "15px 0 5px 20px"}}
            >
              dotData
            </Typography>
            <Item />
            <Item />
            <Typography></Typography>
            <Item />
            <Item />
            <Item />
            <Item />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
