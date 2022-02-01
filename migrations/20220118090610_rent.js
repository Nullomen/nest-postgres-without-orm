/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('rent', function (table) {
    table.increments('id');
    table.integer('car_id').notNullable();
    table.date('start_date').notNullable();
    table.date('end_date').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('rent');
};
