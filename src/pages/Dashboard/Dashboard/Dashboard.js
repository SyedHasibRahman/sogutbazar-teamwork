import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NestedRoutes from "../NestedRoutes/NestedRoutes";
import SidebarNavigation from "../SidebarNavigation/SidebarNavigation";
import logo from "../../../assets/logo/MedicineBD.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const drawerWidth = 240;

const Dashboard = (props) => {
  const { user, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <NavLink to="/" style={ { cursor: "pointer" } }>
        <Typography
          variant="h6"
          component="div"
          sx={ { flexGrow: 1, mt: 2, ml: 4 } }
        >
          <img height="45" width="130" src="https://i.ibb.co/FHjk04S/logo2.png" alt="" />
        </Typography>
      </NavLink>
      {/* <Toolbar /> */ }

      <List>
        <SidebarNavigation />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={ { display: "flex" } }>
      <CssBaseline />
      <AppBar
        elevation={ 0 }
        position="fixed"
        sx={ {
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#ffffff !important",
        } }
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={ handleDrawerToggle }
            sx={ { mr: 2, display: { sm: "none" } } }
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={ { color: "#0C0C0C", fontWeight: "600" } }
          >
            { user.email && (
              <div className="mx-3 text-center">
                <img
                  style={ { width: "40px", height: "40px", borderRadius: "50%" } }
                  src={ user?.photoURL }
                  alt=""
                />

                <span className="">
                  { " " }
                  { user?.displayName } | { admin ? "Admin" : "Subscriber" }
                </span>
              </div>
            ) }
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={ { width: { sm: drawerWidth }, flexShrink: { sm: 0 } } }
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */ }
        <Drawer
          container={ container }
          variant="temporary"
          open={ mobileOpen }
          onClose={ handleDrawerToggle }
          ModalProps={ {
            keepMounted: true, // Better open performance on mobile.
          } }
          sx={ {
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          } }
        >
          { drawer }
        </Drawer>
        <Drawer
          variant="permanent"
          sx={ {
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          } }
          open
        >
          { drawer }
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={ {
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: "#E5E5E5",
          height: "100%",
        } }
      >
        <Toolbar />
        {/* Nested Routes */ }
        <NestedRoutes />
      </Box>
    </Box>
  );
};

export default Dashboard;
