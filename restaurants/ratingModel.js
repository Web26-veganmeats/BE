const db = require('../data/dbConfig');
const knexfile = require('../knexfile')
const knex = require('knex');

module.exports = {
  findById,
  averageForRestaurant,
  add
}

function findById(id) {
  return db('ratings')
    .where({id})
    .first()
}

function averageForRestaurant(restaurant_id) {
  return db('ratings')
    .select(knex.raw('avg(rating) as rating'))
    .where('restaurant_id', restaurant_id)
    .first();
}

async function add(rating, restaurant_id) {
  rating = {
    ...rating,
    restaurant_id
  }
  const [id] = await db('ratings').insert(rating, 'id')

  return findById(id)
}