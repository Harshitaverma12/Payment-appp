import React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

// import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import AdbIcon from "@mui/icons-material/Adb";
import { Typography } from "@mui/material";
import logo from "../src/assets/EDYODA.png";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";

// import avatar from "../../assets/Group 310.png";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#FFFFFF",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          //   sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <img src={logo} alt="logo" />
          <div>
            <Typography
              style={{
                color: "black",
                marginLeft: "3rem",
                marginBottom: "-1rem",
              }}
            >
              Course
            </Typography>
            <KeyboardArrowDownIcon
              style={{
                marginTop: "1rem",
                color: "black",
                marginLeft: "7rem",
                marginTop: "-1rem",
              }}
            />
          </div>
          <div>
            <Typography
              style={{
                color: "black",
                marginLeft: "4rem",
                marginBottom: "-1rem",
              }}
            >
              Programs
            </Typography>
            <KeyboardArrowDownIcon
              style={{
                marginTop: "1rem",
                color: "black",
                marginLeft: "9rem",
                marginTop: "-1rem",
              }}
            />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <SearchIcon
              style={{
                marginTop: "1rem",
                color: "black",
                marginLeft: "30rem",
                marginTop: "-1rem",
                marginBottom: "-1rem",
              }}
            />

            <Typography
              style={{
                marginTop: "1rem",
                color: "black",
                marginLeft: "34rem",
                marginTop: "-1rem",
              }}
            >
              Login
            </Typography>
            <Button
              variant="contained"
              style={{
                marginTop: "1rem",
                color: "black",
                marginLeft: "41rem",
                marginTop: "-3rem",
                background:
                  "linear-gradient(266.79deg, #0048FF 4.63%, #0096FF 100%)",
                borderRadius: "52px",
              }}
            >
              Join Now
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
