
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: "Lambda Interview", project_description: "Lambda School web core interview", project_completed: 1},
        {project_name: "Baseball League", project_description: "Coaching little league baseball"},
      ]);
    });
};
