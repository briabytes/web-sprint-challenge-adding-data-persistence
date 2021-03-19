
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: "Build a flashcards web app to study", task_notes: "Use Express and React then deploy it on Heroku", task_completed: 1, project_id: 1},
        {task_description: "Use the flashcards app to prepare", task_notes: "Make sure to guess answers before flipping the cards", project_id: 1},
        {task_description: "Coach Game 1", task_notes: "Intimidators vs Sharks", task_completed: 1, project_id: 2},
        {task_description: "Coach Game 2", task_notes: "Intimidators vs Sports", task_completed: 1, project_id: 2},
        {task_description: "Coach Game 3", task_notes: "Intimidators vs Rollers", project_id: 2},
      ]);
    });
};
