import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <Box>
      <AppBar elevation={1} position="static" sx={{ padding: "10px" }}>
        <Toolbar>
          <a
            href="https://www.breslo.ro/Soul.Handmade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                width: "80px",
                borderRadius: "50%",
                marginRight: "20px",
              }}
              src={logo}
              alt="logo"
            />
          </a>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontFamily: "Georgia, serif",
              textShadow: (theme) => theme.shadows.myShadow,
            }}
          >
            Produse Handmade
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
