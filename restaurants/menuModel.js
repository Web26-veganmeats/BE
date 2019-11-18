const db = require('../data/dbConfig')

module.exports = {
  findById,
  findForRestaurant,
  add,
  update,
  remove
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
  const [id] = await db('menu_items').insert(menu_item, 'id')

  return findById(id)
}

function update(id, changes) {
  return db('menu_items')
    .where('id', id)
    .update(changes)
    .then(() => {
      return findById(id)
    })
}

function remove(id) {
  return db('menu_items').where('id', id).del()
}