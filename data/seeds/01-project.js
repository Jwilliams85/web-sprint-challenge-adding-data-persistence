
exports.seed = function(knex) {
  return knex('project').del()
  .then(function() {
    return knex('project').insert([
      { project_name: 'peanut sause pasta', description: 'Get raw peanuts, blend it, cook it', completed: 'false'},
      { project_name: 'Bolivian meatballs', description: 'Buy meat, season it, cook it', completed: 'false' },
      { project_name: 'Cheesey bread balls', description: 'Make dough, add chees, make cheesy bread', completed: 'true'}
    ])
  })
};
