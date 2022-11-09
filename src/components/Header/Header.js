import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import "./Header.css"
import logo from "../assets/images/Logo.svg"
import {Box,Grid,List,ListItem,ListItemText,ListItemButton,Drawer,Divider,IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
 
  const [openMobileMenu, setMobileMenu] = useState(false);

  const handleOpenMenu = () => {
    setMobileMenu(!openMobileMenu);
  };

  const listMenu = (
    <Box
      onClick={setMobileMenu}
      sx={{ display: { xs: openMobileMenu ? "block" : "none", sm: "block" } }}
    >
      <List>
      <ListItem>
          <ListItemText>
              <Link to="/"> <img src={logo}  alt="logo"/> </Link>
          </ListItemText>
          <ListItemButton />
        </ListItem>
        <ListItem>
          <ListItemText>
              <Link to="/about">About</Link>
          </ListItemText>
          <ListItemButton />
        </ListItem>
        <ListItem>
          <ListItemText>
              <Link to="/service">Service</Link>
          </ListItemText>
          <ListItemButton />
        </ListItem>
        <ListItem>
          <ListItemText>
              <Link to="/portofolio">Portofolio</Link>
          </ListItemText>
          <ListItemButton />
        </ListItem>
        <ListItem>
          <ListItemText>
              <Link to="/team">Team</Link>
          </ListItemText>
          <ListItemButton />
        </ListItem>
        <ListItem>
          <ListItemText>
              <Link to="/contact">Contact</Link>
          </ListItemText>
          <ListItemButton />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={12} sm={12} md={7}>
            <ul className="menuContainer">
                <li>
                    <Link to="/"> <img src={logo}  alt="logo"/> </Link>
                </li>
                <li className="linkContainer">
                    <Link to="/about">About</Link>
                </li>
                <li className="linkContainer">
                    <Link to="/service">Service</Link>
                </li>
                <li className="linkContainer">
                    <Link to="/portofolio">Portofolio</Link>
                </li>
                <li className="linkContainer">
                    <Link to="/team">Team</Link>
                </li>
                <li className="linkContainer">
                    <Link to="/contact">Contact</Link>
                </li>

                <li className="horizontalLine">
                    <p></p>
                </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleOpenMenu}
                  sx={{ mr: 2, display: { sm: "none" } }}
                  className="menuIconStyles customMobileButton"
                >
                  <MenuIcon />
              </IconButton>

              <Box component="nav">
                <Drawer
                  variant="temporary"
                  open={openMobileMenu}
                  onClose={handleOpenMenu}
                  ModalProps={{
                    keepMounted: true,
                  }}
                  sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: 450 },
                  }}
                >
                  <Box onClick={handleOpenMenu} sx={{ textAlign: "center" }}>
                    <Divider />
                    {listMenu}
                  </Box>
                </Drawer>
              </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
