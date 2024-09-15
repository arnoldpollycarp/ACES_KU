const jwt = require("jsonwebtoken");
const User = require("../models/user");

const requireAuth = async (req, res, next) => {
  const authorization = req.headers["authorization"];

  if (!authorization) {
    return res.status(401).json({ error: "Auth token required" });
  }
  const token = authorization.split(" ")[1];
  try {
    const _id = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findOne(_id).select("_id");
    console.log(req.user);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request not authorized" });
  }
};

module.exports = autheniticateToken;
