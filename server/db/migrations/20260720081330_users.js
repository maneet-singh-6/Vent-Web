/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
  return knex.schema.createTable('Users', (table) => {
    table.increments('id')
    table.string('name')
    table.string('joined_at')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('Users')
}
