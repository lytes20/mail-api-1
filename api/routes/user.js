const express = require('express');

const router = express.Router();

let idCounter = 0;

router.post('/auth/signup', (req, res) => {
  idCounter += 1;
  const user = {
    id: idCounter,
    email: req.body.email,
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    password: req.body.password,
  };

  res.status(201).json({
    status: 201,
    message: 'Successfully created new user',
    data: {
      token: 'aha',
      user,
    },
  });
});

router.post('/auth/login', (req, res) => {
  const { email } = req.body;
  const { password } = req.body;

  if (email === 'email@email.com' && password === 'password') {
    res.status(200).json({
      status: 200,
      message: 'Successfully logged in',
      data: {
        token: 'aha',
      },
    });
  } else {
    res.status(403).json({
      status: 403,
      message: 'Email or password is incorrect',
    });
  }
});
module.exports = router;
