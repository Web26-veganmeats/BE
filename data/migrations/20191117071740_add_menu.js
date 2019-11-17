
exports.up = function(knex) {
  return knex.schema.createTable('menu_items', tbl => {
    tbl.increments()

    tbl.string('name', 128).notNullable()
    tbl.string('item_description', 128).notNullable()
    tbl.string('price', 128)

    tbl
      .integer('restaurant_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('restaurants')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('menu')
};
