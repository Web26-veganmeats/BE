const db = require('../data/dbConfig')

module.exports = {
  findById,
  findForRestaurant,
  add
}

function findById(id) {
  return db('menu_items')
    .where({id})
    .first()
}

function findForRestaurant(restaurant_id) {
  return db('menu_items')
    .where({restaurant_id})
}

async function add(menu_item, restaurant_id) {
  menu_item = {
    ...menu_item,
    restaurant_id
  }
  const [id] = await db('menu_items').insert(menu_item)

  return findById(id)
}