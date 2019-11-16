const bcrypt = require('bcryptjs');
const router = require('express').Router();
const jwt = require('jsonwebtoken');

const Users = require('../users/usersModel');

router.post('/register', (req, res) => {
  let user = req.body;

  if (!user.username || !user.password) {
    res.status(400).json({message: 'Sorry, please enter required information'})
    return
  } 

  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(error).json(error)
    })
});


module.exports = router;
