import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import {
  Box,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Button,
  Typography,
  Skeleton,
  MenuItem,
  Menu,
  Divider,
  ListItemText,
  ListItemIcon,
  Grow,
} from "@mui/material";

// MUI Icons
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Static images
import LnkrLogo from "./assets/icons/lnkr-logo.svg";
import HomeIcon from "./assets/icons/Menu/home-icon.svg";
import SearchIcon from "./assets/icons/Menu/search-icon.svg";
import CalendarIcon from "./assets/icons/Menu/calendar-icon.svg";
import AccountingIcon from "./assets/icons/Menu/accounting-icon.svg";
import InsuranceIcon from "./assets/icons/Menu/insurance-icon.svg";
import CreditIcon from "./assets/icons/Menu/credit-icon.svg";
import DiagIcon from "./assets/icons/Menu/diagnostics-icon.svg";
import OrdersIcon from "./assets/icons/Menu/orders-icon.svg";
import LogoText from "./assets/icons/Menu/logo-text.png";

// Styles
import {
  AppBarStyle,
  BodyStyle,
  MenuIconStyle,
  NavLabel,
  MainIconStyle,
  LogoStyle,
  BodyContainerStyle,
  NavListStyle,
  NavElementStyle,
  DropDownTitle,
  DropDownLinks,
} from "./NavStyle";
import Calendar from "./pages/Calendar/Calendar";
import SearchPatient from "./pages/SearchPatient/SearchPatient";
import TagsNav from "./components/Tagsnav/TagsNav";
import PatientTags from "./pages/PatientTags/PatientTags";
const NavHeight = "60px";

const MenuIcons = [
  {
    href: "home",
    icon: <img src={HomeIcon} style={MenuIconStyle} alt="menu Icon" />,
    label: "Dashboard",
  },
  {
    href: "patients",
    icon: <img src={SearchIcon} style={MenuIconStyle} alt="menu Icon" />,
    label: "Patients",
  },
  {
    href: "diagnostics",
    icon: <img src={DiagIcon} style={MenuIconStyle} alt="menu Icon" />,
    label: "Diagnostics",
  },
  {
    href: "calendar",
    icon: <img src={CalendarIcon} style={MenuIconStyle} alt="menu Icon" />,
    label: "Calendar",
  },
  {
    href: "orders",
    icon: <img src={OrdersIcon} style={MenuIconStyle} alt="menu Icon" />,
    label: "Orders",
  },
  {
    href: "accounting",
    icon: <img src={AccountingIcon} style={MenuIconStyle} alt="menu Icon" />,
    label: "Accounting",
  },
  {
    href: "insurance",
    icon: <img src={InsuranceIcon} style={MenuIconStyle} alt="menu Icon" />,
    label: "Insurance",
  },
  {
    href: "contracts",
    icon: <img src={CreditIcon} style={MenuIconStyle} alt="menu Icon" />,
    label: "Contracts",
  },
];
const Navigation = () => {
  const router = useNavigate();
  const [loaded, setLoaded] = useState(true);
  const [navShrinked, setNavShrinked] = useState(true);

  // Main Icon
  const MainIcon = () => {
    const handleClick = () => setNavShrinked((prev) => !prev);
    if (!navShrinked)
      return <CloseIcon onClick={handleClick} sx={MainIconStyle} />;
    return <MenuIcon style={MainIconStyle} onClick={handleClick} />;
  };

  const DrawerStyle = {
    flexShrink: 0,
    transition: "all ease-in-out 0.6s",
    "& .MuiDrawer-paper": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexGrow: 1,
      transition: "all ease-in-out 0.6s",
      boxSizing: "border-box",
      bgcolor: "#fff",
      // overflow: "hidden",
      borderRadius: "10px",
      wdith: navShrinked ? 70 : 120,
      px: navShrinked ? 0 : 2,
      py: 4,
      mr: 2,
    },
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      {/* ========= NAVBAR ======== */}
      <AppBar position="relative" sx={AppBarStyle}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src={LnkrLogo} style={LogoStyle} alt="Logo for hospitals" />
            <Grow
              in={!navShrinked}
              unmountOnExit={navShrinked}
              style={{
                transformOrigin: "0 0 0",
              }}
              {...(!navShrinked ? { timeout: 1000 } : {})}
            >
              <img src={LogoText} style={LogoStyle} alt="Logo for hospitals" />
            </Grow>
          </Box>
          <DropDown loaded={loaded} />
        </Toolbar>
      </AppBar>
      {/* ========= END NAVBAR ========== */}

      {/* ========= BODY ========== */}
      <Box sx={{ ...BodyContainerStyle, height: `calc(100vh - ${NavHeight})` }}>
        <Drawer sx={DrawerStyle} variant="permanent" anchor="left">
          <MainIcon />
          <List sx={NavListStyle}>
            {MenuIcons.map((item, index) => (
              <Box
                display="flex"
                alignItems="center"
                justifyContent={navShrinked ? "center" : "flex-start"}
                sx={NavElementStyle}
                key={index}
                onClick={() => {
                  router(`/${item.href}`);
                }}
              >
                {item.icon}
                <Grow
                  in={!navShrinked}
                  unmountOnExit={navShrinked}
                  style={{ transformOrigin: "0 0 0" }}
                  {...(!navShrinked ? { timeout: 1000 } : {})}
                >
                  <Typography variant="body1" color="initial" sx={NavLabel}>
                    {item.label}
                  </Typography>
                </Grow>
              </Box>
            ))}
          </List>
        </Drawer>
        {/* ======== Space for extra Nav bars */}
        <TagsNav />
        <Box sx={BodyStyle}>
          <Routes>
            <Route exact path="/home" element={<span>Home</span>} />
            <Route exact path="/patients" element={<SearchPatient />} />
            <Route exact path="/patients/tags/:tag" element={<PatientTags />} />
            <Route
              exact
              path="/diagnostics"
              element={<span>Diagnostics</span>}
            />
            <Route exact path="/calendar" element={<Calendar />} />
            <Route exact path="/orders" element={<span>Orders</span>} />
            <Route exact path="/accounting" element={<span>Accounting</span>} />
            <Route exact path="/insurance" element={<span>Insurance</span>} />
            <Route exact path="/contracts" element={<span>Contracts</span>} />
            <Route exact path="/" element={<span>Home</span>} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

const DropDown = ({ loaded }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ cursor: "pointer" }}>
      {loaded ? (
        <>
          <Button
            endIcon={
              <KeyboardArrowDownIcon sx={{ fontSize: "24px !important" }} />
            }
            onClick={handleClick}
            sx={DropDownTitle}
          >
            DR.SAIF
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonIcon sx={{ fontSize: "18px !important" }} />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h1" color="initial" sx={DropDownLinks}>
                  Profile
                </Typography>
              </ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LockIcon sx={{ fontSize: "18px !important" }} />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h1" color="initial" sx={DropDownLinks}>
                  Settings
                </Typography>
              </ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LogoutIcon sx={{ fontSize: "18px !important" }} />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h1" color="initial" sx={DropDownLinks}>
                  Logout
                </Typography>
              </ListItemText>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Skeleton variant="text" width={100} />
      )}
    </Box>
  );
};
export default Navigation;
