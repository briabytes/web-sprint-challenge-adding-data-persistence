exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {resource_name: 'VS Code', resource_description: 'Visual Studio Code Editor'},
    {resource_name: 'SQLiteStudio', resource_description: 'Create, edit, browse SQLite databases'},
    {resource_name: 'Postman 2', resource_description: 'Platform for API development'},
    {resource_name: 'Canvas', resource_description: ''}
  ]);
};
