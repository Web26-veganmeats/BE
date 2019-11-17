const router = require('express').Router()

const Restaurants = require('./restaurantModel');
const {validateRestaurant} = require('./restaurantsHelper');
const authMiddleware = require('../auth/authMiddleware');

//GETs all restaurants

router.get('/', (req, res) => {
  Restaurants.find()
    .then(restaurants => {
      res.status(200).json(restaurants)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error)
    })
})

//Adds new restaurants by verified user
router.post('/new', authMiddleware, (req, res) => {
  let restaurant = req.body;
  const restaurantValidated = validateRestaurant(restaurant)

  if (restaurantValidated.isSuccessful === true) {
    Restaurants.add(restaurant)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(error => {
      console.log(error);
      //Not sure how to handle a duplicate restaurant-SQLITE_CONSTRAINT: erno 19
      res.status(500).json({message: "There was an error adding the restaurant", error})
    })
  } else {
    res.status(400).json({
      message: 'Invalid information about the restaurant, please see the error for details.',
      errors: restaurantValidated.errors
    })
  }
  
})

router.put('/update/:id', authMiddleware, (req, res) => {
  const id = req.params.id;
  const updatedRestaurant = req.body;

  Restaurants.update(id, updatedRestaurant)
    .then(count => {
      if (count === 0) {
        res.status(404).json({message: 'There is no restaurant with that ID.'})
      } else {
        Restaurants.findById(id)
          .then(restaurant => {
            res.status(201).json(restaurant)
          })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error)
    })
})

router.delete('/delete/:id', authMiddleware, (req, res) => {
  const id = req.params.id;
  
  Restaurants.remove(id)
    .then(removedRestaurant => {
      if (removedRestaurant === 0) {
        //need to fix if restaurant has been deleted
        res.status(404).json(removedRestaurant)
      } else {
        res.status(200).json({message: 'This restaurant has been deleted.'})
      }
    })
})


module.exports = router;