const User = require("../db/model").User;
const jwt = require("jwt-simple");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, "jwtSecret");
}

class AuthController {
  signup(req, res, next) {
    let { username, password, email } = req.body;
    username = username.toLowerCase();

    User.findOne({
      where: { username }
    }).then(user => {
      if (user !== null) {
        res.status(422).json({ error: true, message: "cannot create user" });
      } else {
        User.create({
          username,
          password,
          email
        }).then(user => {
          delete user.password;
          res.json(user);
        });
      }
    });
  }

  signin(req, res, next) {
    res.status(200).json({ token: tokenForUser(req.user) });
  }
}

module.exports = new AuthController();
