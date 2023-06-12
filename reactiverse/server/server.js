require("dotenv").config();
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
  const { username, password, email, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    res.json({
      message: false,
    });
  } else {
    // Read the existing users data from users.json
    const usersData = fs.readFileSync("users.json");
    let users = JSON.parse(usersData);
    const registeredUser = checkUser(email, password, users);

    if (registeredUser) {
      res
        .status(201)
        .json({ message: "Already registered! Please try another email" });
    } else {
      const newUser = { username, password, email };
      users.push(newUser);

      // Convert the updated array back to JSON
      const updatedUsersData = JSON.stringify(users);

      // Write the updated users data to users.json
      fs.writeFileSync("users.json", updatedUsersData);

      // Send a response indicating successful registration
      res.status(200).json({ message: "User registered successfully" });
    }
  }

  // Add the new user to the users array
});

function generateToken(data, key, options) {
  const token = jwt.sign(data, key, options);
  return token;
}

const secretKey = process.env.JWT_SECRET_KEY;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: err });
    }

    // Token is valid, proceed to the next middleware or route handler
    req.user = decoded; // Attach the decoded token payload to the request object
    next();
  });
};

module.exports = verifyToken;

app.get("/auth", verifyToken, (req, res) => {
  // Token is verified, handle the homepage logic
  res.json({ status: 200 });
});

function checkUser(email, password, usersData) {
  const user = usersData.find(
    (u) => u.email === email && u.password === password
  );
  return user ? true : false;
}

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  try {
    const usersData = JSON.parse(fs.readFileSync("users.json"));

    const loggedIn = checkUser(email, password, usersData);
    if (loggedIn) {
      res.status(200).json({
        user: true,
        token: generateToken({ email, password }, process.env.JWT_SECRET_KEY, {
          expiresIn: "30s",
        }),
      });
    } else {
      res.status(200).json({
        user: false,
        token: null,
      });
    }
  } catch (error) {
    console.error("Error reading or parsing users.json:", error);
  }
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
