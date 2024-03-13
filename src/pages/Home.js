import { useEffect, useState } from "react";
import CategoryBar from "../components/CategoryBar";
import Item from "../components/Item";
import Product from "../components/Product";
import Box from "@mui/material/Box";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [productsDisplayed, setProductsDisplayed] = useState(null);
  const [categories, setCategories] = useState(null);
  const [categoryButtons, setCategoryButtons] = useState(null);
  const [productsAvailable, setProductsAvailable] = useState(false);
  const [called, setCalled] = useState(false);
  const [showProduct, setShowProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "/api/products" /*, {
        cache: 'no-store', // Disable caching for this request
        }*/
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const fetchCategs = async () => {
      const response = await fetch("/api/products/allCategories");
      const json = await response.json();
      if (response.ok) setCategories(json["categories"]);
    };
    fetchProducts();
    fetchCategs();
  }, []);

  useEffect(() => {
    if (categories) {
      setCategoryButtons(
        categories.map((categ, idx) => ({ name: categ, isActive: idx === 0 }))
      );
    }
  }, [categories]);

  useEffect(() => {
    if (products && !called) {
      setProductsDisplayed(
        products.filter((p) => p.category === "Brățări bărbați/unisex")
      );
      setProductsAvailable(true);
      setCalled(true);
    }
    // eslint-disable-next-line
  }, [products]);

  const showProductsOfCategory = (category) => {
    setProductsDisplayed(products.filter((p) => p.category === category));
    setCategoryButtons((prevCategButtons) =>
      prevCategButtons.map((categ) => ({
        ...categ,
        isActive: category === categ.name,
      }))
    );
  };

  return (
    <>
      {!productsAvailable && (
        <Box
          sx={{
            borderRadius: "15px",
            margin: "10px auto 0",
            backgroundSize: "contain",
            maxWidth: "933px",
            height: "700px",
            backgroundRepeat: "no-repeat",
            textAlign: "center",
            fontSize: "clamp(15px, 2.2vw, 25px)",
            color: "text.primary",
            fontFamily: "cursive, serif",
            textShadow: "3px 3px 2px black",
            backgroundImage: `url(https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        >
          <Box sx={{ pt: "22%" }}>
            Bine ați venit!
            <br /> Aici puteți găsi diferite produse făcute manual <br />
            cu pasiune și implicare
            <img
              className="loading-image"
              src="https://cdn.pixabay.com/photo/2014/04/03/10/00/ring-309550_640.png"
              alt="loading"
            />
          </Box>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mt: "20px",
          gap: "50px",
        }}
      >
        {productsAvailable && (
          <>
            <Product close={() => setShowProduct(null)} product={showProduct} />
            {!showProduct && (
              <>
                <CategoryBar
                  categoryButtons={categoryButtons}
                  changeProducts={showProductsOfCategory}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  {productsDisplayed &&
                    productsDisplayed.map((product) => (
                      <Item
                        key={product._id}
                        product={product}
                        onClick={() => {
                          setShowProduct(product);
                        }}
                      />
                    ))}
                </Box>
              </>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default Home;
