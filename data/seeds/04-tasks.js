exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {task_description: 'Required Tables', task_notes: 'Build the migration(s) in Knex', task_completed: false, project_id: 1},
    {task_description: 'Required Endpoints', task_notes: 'Build an API inside the `api` folder', task_completed: false, project_id: 1},
    {task_description: 'Take module 4.2 assessment', task_notes: '', task_completed: false, project_id: 2},
  ]);
};
