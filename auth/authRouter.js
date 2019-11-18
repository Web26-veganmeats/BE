const bcrypt = require('bcryptjs');
const router = require('express').Router();
const jwt = require('jsonwebtoken');

const Users = require('../users/usersModel');
const secrets = require('../config/secrets');
const {validateUser} = require('../users/usersHelpers');

//Registers New User
router.post('/register', (req, res) => {
  let user = req.body;

  const validateResult = validateUser(user)

  if (validateResult.isSuccessful === true) {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(error).json(error)
    })
  } else {
    res.status(400).json({
      message: 'Invalid information about the user, please see the error for details.',
      errors: validateResult.errors
    })
    
  }  
});


//Logins in User with token
router.post('/login', (req, res) => {
  const validateResult = validateUser(req.body)

  if (!validateResult.isSuccessful) {
    res.status(400).json({message: validateResult.errors});
    return;
  }

  let {username, password} = req.body

  Users.findBy({username})
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getJwtToken(user)

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
    user_id: user.id,
    username: user.username
  };
  const options = {
    expiresIn: '1d'
  }

  console.log(payload);
return jwt.sign(payload, secrets.JWT_SECRET, options)
}

module.exports = router;
