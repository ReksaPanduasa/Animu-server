const jwt = require("jsonwebtoken");

//verify token from cookies
const verifyToken = (req, res, next) => {
  const { token } = req.cookies;

  console.log("Cookies: ", req.cookies);

  //Kalo tokennya ga ada
  if (!token) {
    const error = new Error("Token not found");
    error.code = 401;
    error.status = "Unauthorized";

    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    return res.status(response.code).json(response);
  }

  //Kalo tokennya ada
  try {
    const decoded = jwt.verify(token, "M1bSh0CA0W");
    req.userId = decoded;
    next();
  } catch (error) {
    error.code = 401;
    error.status = "Unauthorized";

    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    return res.status(response.code).json(response);
  }
};

module.exports = { verifyToken };