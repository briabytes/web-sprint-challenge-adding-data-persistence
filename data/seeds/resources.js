
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: "Baseball Equipment", resource_description: "Includes bats, gloves and balls"},
        {resource_name: "Lambda Cards", resource_description: "Flashcards with web core concepts"},
        {resource_name: "Das Keyboard", resource_description: "Mechanical keyboard for better typing experience"},
      ]);
    });
};
