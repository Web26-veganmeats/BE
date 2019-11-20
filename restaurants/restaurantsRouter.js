const router = require('express').Router()

const Restaurants = require('./restaurantModel');
const Menu = require('./menuModel');
const Ratings = require('./ratingModel');

const {validateRestaurant} = require('./restaurantsHelper');
const authMiddleware = require('../auth/authMiddleware');


//GETs all restaurants
router.get('/', async (req, res) => {
  try {
    let restaurants = await Restaurants.find();
    restaurants = await Promise.all(restaurants.map(async (restaurant) => {
      let menuItems = await Menu.findForRestaurant(restaurant.id);
      const rating = (await Ratings.averageForRestaurant(restaurant.id)).rating;

      return {
        ...restaurant,
        menuItems,
        rating,
      }
    }));
    res.status(200).json(restaurants)
  } catch (error) {  
    console.log(error)
    res.status(500).json(error)
  }
});

//Gets Restaurant by ID
router.get('/:id', async (req, res) => {
  try {
    let restaurant = await Restaurants.findById(req.params.id);
    if (!restaurant) {
      res.status(404).json({message: `Restaurant with id ${req.params.id} does not exist`});
      return;
    }
    restaurant.menuItems = await Menu.findForRestaurant(restaurant.id);
    restaurant.rating = (await Ratings.averageForRestaurant(restaurant.id)).rating;

    res.status(200).json(restaurant)
  } catch (error) {  
    console.log(error)
    res.status(500).json(error)
  }
});

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
      res.status(500).json({message: "There was an error adding the restaurant", error})
    })
  } else {
    res.status(400).json({
      message: 'Invalid information about the restaurant, please see the error for details.',
      errors: restaurantValidated.errors
    })
  }
  
})

//Update the Restaurant info by Registered User
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

//Deletes restaurant
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

//Adds menu item to a specific restaurant
router.post('/:id/menu/new', authMiddleware, (req, res) => {
  let menu = req.body;
  const restaurant_id = req.params.id;

  Menu.add(menu, restaurant_id)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error)
    })
})

//Updates menu item for the restaurant
router.put('/menu/update/:id', authMiddleware, (req, res) => {
  const id = req.params.id;
  const updatedMenuItem = req.body;

  Menu.update(id, updatedMenuItem)
    .then(count => {
      if (count === 0) {
        res.status(404).json({message: 'There is no menu item with that ID.'})
      } else {
        Menu.findById(id)
          .then(menu => {
            res.status(201).json(menu)
          })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error)
    })
})

//Deletes menu item
router.delete('/menu/:id/delete', authMiddleware, (req, res) => {
  const id = req.params.id;
  
  Menu.remove(id)
    .then(removedMenuItem => {
      if (removedMenuItem === 0) {
        res.status(404).json(removedMenuItem)
      } else {
        res.status(200).json({message: 'This menu item has been deleted.'})
      }
    })
})

//Adds Rating to Restaurant
router.post('/:id/rating/new', authMiddleware, (req, res) => {
  let rating = req.body;

  if (rating.rating > 5 || rating.rating < 1) {
    res.status(400).json({message: 'Rating between 1-5 are allowed'})
    return
  }
  const restaurant_id = req.params.id;

  Ratings.add(rating, restaurant_id)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error)
    })
})

module.exports = router;