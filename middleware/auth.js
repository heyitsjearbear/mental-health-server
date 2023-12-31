const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).send({ error: "You must be logged in." });
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(401).send({ error: "You must be logged in." });
    req.user = payload;
    next();
  });
};
