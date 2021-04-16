exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {project_name: 'Sprint Challenge', project_description: 'Complete MVP', project_completed: false},
    {project_name: 'Sprint Assessment', project_description: 'Complete tests', project_completed: false},
  ]);
};
