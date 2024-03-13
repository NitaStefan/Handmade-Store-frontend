import { Box, Button, Typography, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { lighten } from "@mui/material/styles";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Product({ product, close }) {
  const primColor = useTheme().palette.primary.main;
  const lighterPrimColor = lighten(primColor, 0.3);
  if (!product) return null;
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        gap: "50px",
        flexWrap: "wrap",
        justifyContent: "space-around",
        minWidth: "520px",
      }}
    >
      <Box
        sx={{
          width: 400,
          alignSelf: "start",
          borderRadius: "10px",
          border: `4px solid ${lighterPrimColor}`,
          boxShadow: `0px 0px 15px ${primColor}`,
        }}
      >
        <Carousel showStatus={false} showThumbs={false} width={400}>
          <img
            alt="image1"
            src={`data:image/jpeg;base64,${product.images[0]}`}
          />
          <img
            alt="image2"
            src={`data:image/jpeg;base64,${product.images[1]}`}
          />
          <img
            alt="image3"
            src={`data:image/jpeg;base64,${product.images[2]}`}
          />
        </Carousel>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          minWidth: "300px",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <Box>
          <Typography
            fontWeight={700}
            gutterBottom
            variant="h4"
            component="div"
          >
            {product.name}
          </Typography>
          <Typography fontWeight={600} variant="h5">
            {product.price} lei
          </Typography>
        </Box>
        <Divider />
        <Typography fontStyle="italic">
          Pentru mai multe detalii despre produs și achiziționare
          <Link to={product.link} target="_blank" rel="noopener noreferrer">
            <Button> Apăsați aici</Button>
          </Link>
        </Typography>
      </Box>
      <Box
        sx={{
          p: "20px",
          backgroundColor: primColor,
          color: "text.primary",
          borderRadius: "20px",
        }}
      >
        {product.description}
      </Box>
      <Button
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
        onClick={close}
      >
        <CancelPresentationIcon sx={{ width: "40px", height: "50px" }} />
      </Button>
    </Box>
  );
}
