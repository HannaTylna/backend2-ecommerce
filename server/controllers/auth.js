const jwt = require("jsonwebtoken");

const JWT_SECRET = "wqasedfrghsadfvghnjytrefd";

const generateToken = user => {
  const userId = user._id.toString();
  return jwt.sign({ userId, username: user.username }, JWT_SECRET, {
    expiresIn: "24 h",
    subject: userId
  });
};

const authUser = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    req.user = jwt.verify(token, JWT_SECRET);
  }
  next();
};

module.exports = { authUser, generateToken };
