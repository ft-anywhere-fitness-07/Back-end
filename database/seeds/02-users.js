exports.seed = function(knex) {
  return knex('users')
    .then(function () {
      return knex('users').insert([
        {username: 'Rick J. Walters', email: 'RickJWalters@jourrapide.com', password:'1234', role:'instructor'},
        {username: 'Fred J. Enlow', email: 'FredJEnlow@dayrep.com', password:'4321', role:'student'},
        {username: 'Robert W. Logan', email: 'RobertWLogan@armyspy.com', password: '12345', role:'student'},
        {username: 'Matthew E. Brew', email: 'MatthewEBrew@armyspy.com', password: '54321', role:'student'},
        {username: 'Betty J. Cummings', email: 'BettyJCummings@armyspy.com', password: '654321', role:'student'},
        {username: 'Cecil K. McNab', email: 'CecilKMcNab@teleworm.us', password: '123456', role:'instructor'}
      ]);
    });
};