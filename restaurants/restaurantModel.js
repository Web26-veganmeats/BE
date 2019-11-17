const db = require('../data/dbConfig');

module.exports = {
  findRestaurantById,
  add
}

function findRestaurantById(id) {
  return db('restaurants')
    .where({id})
    .first()
}

async function add(restaurant) {
  const [id] = await db('restaurants').insert(restaurant)

  return findRestaurantById(id)
}
