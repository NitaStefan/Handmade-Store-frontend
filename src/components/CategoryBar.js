import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function CategoryBar({ categoryButtons, changeProducts }) {
  return (
    <Box
      sx={{
        ml: "20px",
        width: "100%",
        maxWidth: 240,
        height: "100%",
        bgcolor: "background.paper",
        borderRadius: "8px",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          {categoryButtons &&
            categoryButtons.map((categ, idx) => (
              <ListItem
                sx={{
                  color: (theme) =>
                    categ.isActive ? theme.palette.text.primary : undefined,
                  backgroundColor: (theme) =>
                    categ.isActive ? theme.palette.primary.main : undefined,
                }}
                key={idx}
                disablePadding
              >
                <ListItemButton onClick={() => changeProducts(categ.name)}>
                  <ListItemText primary={categ.name} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </nav>
    </Box>
  );
}
