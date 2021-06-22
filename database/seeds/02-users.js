const bcrypt = require('bcryptjs')
exports.seed = function(knex) {
  return knex('users')
    .then(function () {
      return knex('users').insert([
        {username: 'Rick J. Walters', email: 'RickJWalters@jourrapide.com', password: bcrypt.hashSync('46487',10), role:'instructor'},
        {username: 'Fred J. Enlow', email: 'FredJEnlow@dayrep.com', password: bcrypt.hashSync('494784',10), role:'student'},
        {username: 'Robert W. Logan', email: 'RobertWLogan@armyspy.com', password: bcrypt.hashSync('48949',10), role:'student'},
        {username: 'Matthew E. Brew', email: 'MatthewEBrew@armyspy.com', password: bcrypt.hashSync('43848',10), role:'student'},
        {username: 'Betty J. Cummings', email: 'BettyJCummings@armyspy.com', password: bcrypt.hashSync('9048',10), role:'student'},
        {username: 'Cecil K. McNab', email: 'CecilKMcNab@teleworm.us', password: bcrypt.hashSync('028207',10), role:'instructor'}
      ]);
    });
};