const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  try {
    return jwt.verify(token, "secret");
  } catch {
    return null;
  }
};

module.exports = { verifyToken };