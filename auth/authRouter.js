const bcrypt = require('bcryptjs');
const router = require('express').Router();
const jwt = require('jsonwebtoken');

const Users = require('../users/usersModel');
const secrets = require('../config/secrets');

//Registers New User
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

//Logins in User with token
router.post('/login', (req, res) => {
  let {username, password} = req.body

  Users.findBy({username})
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getJwtToken(user.username)

        res.status(200).json({
          message: `Welcome ${username}`,
          token
        })
      } else {
        res.status(401).json({message: 'Invalid credentials were entered'})
      }  
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error)
    })
})

function getJwtToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: '1d'
  }
return jwt.sign(payload, secrets.JWT_SECRET, options)
}

module.exports = router;
