module.exports = {
  validateRestaurant
}

function validateRestaurant(restaurant) {
  let errors = [];

  if (!restaurant.name) {
    errors.push('Please add a restaurant name.')
  }

  if(!restaurant.street_address) {
    errors.push('Please include an address for the restaurant.')
  }

  if(!restaurant.city) {
    errors.push('Please include a city for the restaurant.')
  }

  if(!restaurant.state) {
    errors.push('Please include a state for the restaurant.')
  }

  if(!restaurant.zip_code) {
    errors.push('Please include a zip code for the restaurant.')
  }

  if(!restaurant.phone) {
    errors.push('Please include a phone number for the restaurant.')
  }

  return {
    isSuccessful: errors.length > 0 ? false : true,
    errors
  }
}