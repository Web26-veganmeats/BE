const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
}

function find() {
  return db('restaurants')
    .select('id', 'name', 'street_address', 'city', 'state', 'zip_code', 'phone', 'hours')
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

function update(id, changes) {
  return db('restaurants')
    .where('id', id)
    .update(changes)
    .then(() => {
      return findById(id);
    })
}

function remove(id) {
  return db('restaurants').where('id', id).del()
}