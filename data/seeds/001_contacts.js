
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {
          id: 1, 
          name: 'Bill',
          companyName: 'Microsoft',
          email: 'bill@microsoft.com'
        },
        {
          id: 2, 
          name: 'Warren',
          companyName: 'Berkshire Hathaway',
          email: 'warren@berkshire.com'
        },
        {
          id: 3, 
          name: 'Evan',
          companyName: 'Black Rifle Coffee',
          email: 'evan@brc.com'
        }
      ]);
    });
};
