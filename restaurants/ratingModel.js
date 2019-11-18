const db = require('../data/dbConfig');

module.exports = {
  findById,
  add
}

function findById(id) {
  return db('ratings')
    .where({id})
    .first()
}

async function add(rating) {
  const [id] = await db('ratings').insert(rating, 'id')

  return findById(id)
}