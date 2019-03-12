const express = require("express");
const router = express.Router();

let idCounter = 0;

router.post("/auth/signup", (req, res, next) => {
  idCounter++;
  const user = {
    id: idCounter,
    email: req.body.email,
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    password: req.body.password
  };

  res.status(201).json({
    status: 201,
    message: "Successfully created new user",
    data: {
      token: "aha",
      user
    }
  });
});

module.exports = router;
