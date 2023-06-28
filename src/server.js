require('dotenv').config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.EXPRESS_PORT; 
const public = require("./routes/public")
const protected = require("./routes/protected")
const { verifyToken } = require("./middleware/verifyToken");
const cors = require("cors");

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json());
app.use(cookieParser());

app.get("/test", (req, res) => {
  res.cookie("animuAuthenticatedUser",{
    maxAge: process.env.COOKIE_EXPIRES,
  });
  console.log("Cookies: ", req.cookies);
  res.send(req.cookies);
});

app.use("/", public);
app.use("/", protected);
app.use(verifyToken);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});