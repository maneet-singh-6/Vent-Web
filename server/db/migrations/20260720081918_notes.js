/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
  return knex.schema.createTable('Notes', (table) => {
    table.increments('id')
    table.string('user_id')
    table.string('content')
    table.string('created_at')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('Notes')
}