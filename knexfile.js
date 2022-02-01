/* eslint-disable prettier/prettier */
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host:     'localhost',
      database: 'some_db',
      user:     'root',
      password: 'root_password'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      host:     'localhost',
      database: 'some_db',
      user:     'root',
      password: 'root_password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host:     'localhost',
      database: 'some_db',
      user:     'root',
      password: 'root_password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
