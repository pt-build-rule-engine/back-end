exports.up = async function(knex) {
  await knex.schema.createTable('contacts', contacts => {
    contacts.increments();
    contacts
        .string('email', 50)
        .notNullable()
        .unique();
    contacts
        .string('company name', 50)
        .notNullable();
    contacts
        .string('name', 50)
        .notNullable()
        .unique();
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('contacts');
};
