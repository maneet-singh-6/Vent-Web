/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('Notes').del()
  await knex('Notes').insert([
    {id: 1, user_id: 1, content: 'My teacher made fun of me in front of the whole class.', created_at: '20/7/2026'},
    {id: 2, user_id: 2, content: "I liked stealing someone's chocolate bar and want to do it again.", created_at: '15/6/2026'},
    {id: 3, user_id: 3, content: 'I feel inadequate and like a failure.', created_at: '12/12/2025'}
  ]);
};
