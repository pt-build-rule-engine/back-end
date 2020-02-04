exports.up = async function(knex) {
    await knex.schema.createTable('users', users => {
        users.increments();
  
        users
            .string('name', 50)
            .notNullable()
            .unique();
        users
            .string('password', 255)
            .notNullable();
        users
            .string('company', 50)
            .notNullable();
        users
            .string('email', 100)
            .notNullable()
            .unique();
        users
            .integer('phoneNumber', 10)
            .notNullable()
            .unique();
    });
  };
  
  exports.down = async function(knex, Promise) {
    await knex.schema.dropTableIfExists('users');
  };