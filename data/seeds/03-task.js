

exports.seed = function(knex) {
  return knex('task').del()
  .then(function () {
 
   return knex('task').insert([
     {description: 'Work on peanut sauce', notes: 'Follow instructions', completed: 'false', project_id: 1 },
     {description: 'Work on Bolivian meatballs', notes: 'Follow instructions', completed: 'false', project_id: 2},
     {description: 'Work on Cheesy bread balls', notes: 'Follow recipe', completed: 'true', project_id: 3},
   ])
  })
 };