require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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
        brand: "nike",
        rate: "700",
        offer: "60%",
        image: "https://placehold.co/300x200",
      },
    ],
  });
});

// Store posts in DB

app.use(express.json()); // This line is crucial to be able to parse JSON bodies.

const filePath = path.join(__dirname, 'posts.json');
console.log("Attempting to create or modify file at:", filePath);


app.post("/posts", (req, res) => {
  console.log("Received POST request to /posts");
  // Initialize posts array
  let posts = [];

  // Check if the posts.json file exists
  if (fs.existsSync(filePath)) {
    // Read the file (synchronously for simplicity, consider async for production)
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      posts = JSON.parse(data); // Parse existing posts if any
    } catch (error) {
      console.error('Error reading or parsing file:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
  }

  const newPost = req.body;
  posts.push(newPost);

  // Write the updated posts array back to the file
  fs.writeFile(filePath, JSON.stringify(posts, null, 2), (err) => {
    if (err) {
      console.error('Error writing file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    // Respond with a success message
    res.status(200).send({message: 'Post added'},);
  });
});


app.get("/posts", (req, res) => {
  // Use query parameters instead of body for GET requests
  const { author, body } = req.query;

  // Assuming the posts are stored in posts.json
  const filePath = path.join(__dirname, 'posts.json');
  let posts = JSON.parse(fs.readFileSync(filePath));

  // Filter posts based on author and body if they are provided
  if (author) {
    posts = posts.filter(post => post.author === author);
  }

  if (body) {
    posts = posts.filter(post => post.body.includes(body));
  }
  res.json(posts);
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
          expiresIn: "20s",
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
