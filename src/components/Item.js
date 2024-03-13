import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";

export default function Item({ product, onClick }) {
  const [elevation, setElevation] = useState(1);

  const handleMouseOver = () => {
    setElevation(8);
  };

  const handleMouseOut = () => {
    setElevation(1);
  };

  return (
    <Card
      elevation={elevation}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
      sx={{
        maxWidth: 200,
        maxHeight: 350,
        backgroundColor: "primary.main",
      }}
    >
      <CardActionArea
        disableRipple
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 200,
            height: 200,
            objectFit: "cover",
          }}
          image={`data:image/jpeg;base64,${product.images[0]}`}
          alt={product.name}
        />
        <CardContent
          sx={{
            textAlign: "center",
            color: "text.primary",
            textShadow: (theme) => theme.shadows.myShadow,
          }}
        >
          <Typography
            fontWeight={700}
            gutterBottom
            variant="subtitle1"
            component="div"
          >
            {product.name}
          </Typography>
          <Typography fontWeight={600} variant="body1">
            {product.price} lei
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
