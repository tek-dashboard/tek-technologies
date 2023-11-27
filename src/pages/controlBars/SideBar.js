import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme.js";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";




const SideBar = () => {

  const theme = useTheme();
  const colors = tokens(theme.pallette.mode);
  const [isCollapsed, setIsCollapsed] = useState('Dashboard')

  return 
  <Box
  sx={{
    '& .pro-sidebar-inner': {background: `${colors.primary[400]} !important`},
    '& .pro-sidebar-wrapper': {backgroundColor: 'transparent !important'},
    '& .pro-sidebar-item': {background: `${colors.primary[400]} !important`},
    '& .pro-inner-item:hover': {color: '#1db5f5 !important'},
    '& .pro-inner-item:active': {color: '#868dfb !important'},

  }}
  > 
  </Box>

}

export default SideBar;