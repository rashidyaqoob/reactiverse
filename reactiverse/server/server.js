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
    jeans: [
      {
        color: "red",
        size: "medium",
        brand: "Puma",
      },
      {
        color: "black",
        size: "large",
        brand: "Puma",
      },
      {
        color: "grean",
        size: "medium",
        brand: "nike",
      },
    ],
    jackets: [
      {
        color: "red",
        size: "medium",
        brand: "Puma",
      },
      {
        color: "black",
        size: "large",
        brand: "Puma",
      },
      {
        color: "grean",
        size: "medium",
        brand: "nike",
      },
    ],
  });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
