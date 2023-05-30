const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({
    homepage_banner_content: {
      homepage_banner_title: "Welcome to the Reactiverse",
    },
  });
});

app.get("/outfit", (req, res) => {
  res.json({
    men: [
      {
        color: "red jean",
        size: "medium",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "black",
        size: "large",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "red jean",
        size: "medium",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "black",
        size: "large",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "red jean",
        size: "medium",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "black",
        size: "large",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "red jean",
        size: "medium",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "black",
        size: "large",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "red jean",
        size: "medium",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "black",
        size: "large",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "red jean",
        size: "medium",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "black",
        size: "large",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "red jean",
        size: "medium",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "black",
        size: "large",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "green",
        size: "medium",
        brand: "nike",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
    ],
    women: [
      {
        color: "red",
        size: "medium",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "black",
        size: "large",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "green",
        size: "medium",
        brand: "nike",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "black",
        size: "large",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "green",
        size: "medium",
        brand: "nike",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "black",
        size: "large",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "green",
        size: "medium",
        brand: "nike",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "black",
        size: "large",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "green",
        size: "medium",
        brand: "nike",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "black",
        size: "large",
        brand: "Puma",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
      {
        color: "green",
        size: "medium",
        brand: "nike",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
    ],
  });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
