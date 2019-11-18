
exports.up = function(knex) {
  return knex.schema.createTable('restaurants', tbl => {
    tbl.increments();

    tbl.string('name', 128).notNullable();

    tbl.string('street_address', 128).notNullable();
    
    tbl.string('city', 128).notNullable();

    tbl.string('state', 128).notNullable();

    tbl.string('zip_code', 128).notNullable();

    tbl.string('phone', 128).notNullable();

    tbl.string('hours', 128);

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('restaurants');
};
