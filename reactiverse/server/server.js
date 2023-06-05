const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/home", (req, res) => {
//   res.json({
//     name: "Bill",
//     age: 99,
//   });
// });

// app.post("/home", (req, res) => {
//   const { username, password, confirmPassword } = req.body;
//   const { authorization } = req.headers;
//   if (password !== confirmPassword) {
//     return res.send({
//       message: "This is an error!",
//     });
//   }
//   res.send({
//     username,
//     password,
//     confirmPassword,
//     authorization,
//   });
// });

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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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
        color: "green",
        size: "medium",
        brand: "puma",
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

// retrieve data from users.json file

app.get("/sign-up", (req, res) => {
  res.json(JSON.parse(fs.readFileSync("users.json")));
});

// Register a new user
app.post("/sign-up", (req, res) => {
  const { username, password, email } = req.body;

  // Read the existing users data from users.json
  const usersData = fs.readFileSync("users.json");
  let users = JSON.parse(usersData);

  // Add the new user to the users array
  const newUser = { username, password, email };
  users.push(newUser);

  // Convert the updated array back to JSON
  const updatedUsersData = JSON.stringify(users);

  // Write the updated users data to users.json
  fs.writeFileSync("users.json", updatedUsersData);

  // Send a response indicating successful registration
  res.status(200).json({ message: "User registered successfully" });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
