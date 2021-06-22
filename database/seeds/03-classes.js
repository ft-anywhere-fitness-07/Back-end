exports.seed = function(knex) {
    return knex('classes')
      .then(function () {
        return knex('classes').insert([
          {name:'Power Hour', type:'Cyling', time:'7:00 am', duration:'1hr', intensityLvl:'hard', location:'Los Angeles, CA', attendees: 5, maxSize: 10},
          {name:'Yogis for life', type:'Yoga', time:'2:45 pm', duration:'2hr', intensityLvl:'easy', location:'Los Angeles, CA', attendees: 4, maxSize: 12},
        ]);
      });
  };