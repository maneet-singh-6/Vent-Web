/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('Users').del()
  await knex('Users').insert([
    {id: 1, name: 'Maneet', joined_at: '20th July 2026'},
    {id: 2, name: 'Oscar', joined_at: '12th June 2026'},
    {id: 3, name: 'Daniel', joined_at: '1st August 2025'}
  ]);
};