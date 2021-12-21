import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import img from "../../utils/images/icon.jpeg";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", url: "/" },
  { name: "Breeds", url: "/breeds" },
  { name: "FAQ", url: "/faq" },
  { name: "About", url: "/about" },
  { name: "Contact Us", url: "/contact" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const useStyles = makeStyles({
  imgIcon: {
    width: "75px",
    borderRadius: "50%",
    padding: "10px",
  },
  avatar: {
    width: "50px !important",
    height: "5r0px !important",
  },
  // menu: {
  //   width: "50%",
  //   margin: "0 auto",
  //   "&.css-1t6c9ts": {
  //     display: "flex",
  //     justifyContent: "space-between",
  //   },
  // },

  menuItem: {
    "&.css-1q39md6-MuiButtonBase-root-MuiButton-root": {
      margin: "0 0.5rem",
    },
  },
});
const ResponsiveAppBar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ width: "100%", backgroundColor: "#F08080" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img  src={img} alt="icon" className={classes.imgIcon} />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              className={classes.menu}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  className={classes.menuItem}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                >
                  <Link to={{ pathname: page.url }}>
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            The Dog store
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <MenuItem
                className={classes.menuItem}
                key={page.name}
                onClick={handleCloseNavMenu}
              >
                <Link to={{ pathname: page.url }} >
                  {page.name}
                </Link>
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar
                  src="/broken-image.jpg"
                  sx={{ p: 0 }}
                  className={classes.avatar}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
