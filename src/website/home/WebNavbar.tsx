import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { images } from "../../assets/Images/Images";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const WebNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<any>(null); // For desktop dropdown
  const [clientOpen, setClientOpen] = useState(false); // For mobile dropdown

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/about" },
    { label: "Clients", path: "/client" }, 
    { label: "Find a Job", path: "/job" },
    { label: "Contact us", path: "/contact" },
  ];

  return (
    <>
      {/* MAIN NAVBAR */}
      <Box
        sx={{
          py: 1,
          background: "var(--primary)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          className="website-container"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 1.5,
          }}
        >
          {/* Left Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box className="logo-bg"></Box>
            <Box className="logo-bgbig"></Box>
            <Box
              sx={{
                width: "max-content",
                borderRadius: "5px",
                cursor: "pointer",
                position: "relative",
                zIndex: "999999",
              }}
              onClick={() => navigate("/")}
            >
              <Box component="img" src={images.logo} alt="logo" width={150} />
            </Box>
          </Box>

          {/* CENTER MENU (DESKTOP) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              fontWeight: 600,
              alignItems: "center",
            }}
          >
            {menuItems.map((item) => {
              if (item.label === "Clients") {
                const isActive =
                  location.pathname === "/client" ||
                  location.pathname === "/outsourcing" ||
                  location.pathname === "/recruitment";

                return (
                  <Box key={item.label} sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        cursor: "pointer",
                        color: isActive ? "var(--newprimary)" : "var(--white)",
                        borderBottom: isActive
                          ? "2px solid var(--newprimary)"
                          : "none",
                        pb: isActive ? "2px" : 0,
                      }}
                      onClick={(e) => setAnchorEl(e.currentTarget)}
                    >
                      Clients ▾
                    </Box>

                    {/* DROPDOWN MENU */}
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={() => setAnchorEl(null)}
                      PaperProps={{
    sx: {
      zIndex: 999999999,   
      mt: 1,            
    },
  }}
                      MenuListProps={{ sx: { width: 160, } }}
                    >
                      <MenuItem
                        onClick={() => {
                          navigate("/outsourcing");
                          setAnchorEl(null);
                        }}
                        sx={{fontFamily:"Medium_M"}}
                      >
                        Outsourcing
                      </MenuItem>

                      <MenuItem
                        onClick={() => {
                          navigate("/recruitment");
                          setAnchorEl(null);
                        }}
                        sx={{fontFamily:"Medium_M"}}
                      >
                        Recruitment
                      </MenuItem>
                    </Menu>
                  </Box>
                );
              }

              const isActive = location.pathname === item.path;

              return (
                <Box
                  key={item.label}
                  sx={{
                    cursor: "pointer",
                    color: isActive ? "var(--newprimary)" : "var(--white)",
                    borderBottom: isActive
                      ? "2px solid var(--newprimary)"
                      : "none",
                    pb: isActive ? "2px" : 0,
                  }}
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </Box>
              );
            })}
          </Box>

          {/* RIGHT SIDE BUTTON + TOGGLE */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                display: { xs: "none", md: "block" },
                background: "var(--newprimary)",
                color: "#fff",
                textTransform: "none",
                fontFamily: "Medium_M",
                px: 3,
              }}
              onClick={() => navigate("/contact")}
            >
              Book Your Call
            </Button>

            {/* Mobile Menu */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <FaBarsStaggered
                style={{ fontSize: "20px", color: "var(--white)" }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* DRAWER SIDEBAR (MOBILE) */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ zIndex: "999999999" }}
      >
        <Box sx={{ width: 260, p: 2 }}>
          {/* Sidebar Logo */}
          <Box sx={{ textAlign: "center", pb: 2 }}>
            <Box
              component="img"
              src={images.logo}
              alt="sidebar-logo"
              width={120}
              sx={{ mx: "auto" }}
            />
          </Box>

          {/* MENU LIST */}
          <List>
            {menuItems.map((item) => {
              if (item.label === "Clients") {
                return (
                  <Box key={item.label}>
                    <ListItem
                      sx={{ cursor: "pointer", fontWeight: 600 }}
                      onClick={() => setClientOpen(!clientOpen)}
                    >
                      Clients ▾
                    </ListItem>

                    {clientOpen && (
                      <>
                        <ListItem
                          sx={{ pl: 4, cursor: "pointer" }}
                          onClick={() => {
                            navigate("/outsourcing");
                            setOpen(false);
                          }}
                        >
                          Outsourcing
                        </ListItem>

                        <ListItem
                          sx={{ pl: 4, cursor: "pointer" }}
                          onClick={() => {
                            navigate("/recruitment");
                            setOpen(false);
                          }}
                        >
                          Recruitment
                        </ListItem>
                      </>
                    )}
                  </Box>
                );
              }

              return (
                <ListItem
                  key={item.label}
                  sx={{ cursor: "pointer", fontWeight: 600, py: 1.5 }}
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                >
                  {item.label}
                </ListItem>
              );
            })}

            {/* Mobile Book Call Button */}
            <ListItem>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  textTransform: "none",
                  background: "var(--newprimary)",
                  fontFamily: "Medium_M !important",
                  mt: "20px !important",
                }}
                onClick={() => {
                  navigate("/contact");
                  setOpen(false);
                }}
              >
                Book Your Call
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default WebNavbar;
