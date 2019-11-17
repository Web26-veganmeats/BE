const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  add
}

function find() {
  return db('restaurants').select('id', 'name', 'street_address', 'city', 'state', 'zip_code', 'phone', 'hours')
}

function findById(id) {
  return db('restaurants')
    .where({id})
    .first()
}

async function add(restaurant) {
  const [id] = await db('restaurants').insert(restaurant)

  return findById(id)
}
