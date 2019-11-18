
exports.up = function(knex) {
  return knex.schema.createTable('ratings', tbl => {
    tbl.increments()

    tbl.integer('rating').notNullable();

    tbl
      .integer('restaurant_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('restaurants')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ratings')
};
