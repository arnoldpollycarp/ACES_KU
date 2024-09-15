const jwt = require("jsonwebtoken");
const NotAuthorizedError = require("../errors/NotAuthorizedError");

const requireAuth = async (req, res, next) => {
  const authorization = req.headers.authorization;
  let token = "";
  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
  }

  const accessToken = token;
  // TODO:  implement session logic later
  // const accessToken = req.session?.jwt || token;

  if (!authorization) {
    throw new NotAuthorizedError();
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(payload);
    req.currentUser = payload;
    console.log(req.user);
    next();
  } catch (error) {
    console.log("Not authorized Error: ", error);
    throw new NotAuthorizedError();
  }
};

module.exports = { requireAuth };
