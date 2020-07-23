module.exports = {
  development: {
    client: "sqlite3",
    connection: { filename: "./data/how-to.db3" },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
      // tableName: "dbmigrations",
    },
    seeds: { directory: "./data/seeds" },

    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },

  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/test.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },

    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },
  production: {
    // client: 'postgresql',
    // connection: process.env.DATABASE_URL,
    // migrations: {
    //   tableName: 'knex_migrations',
    //   directory: './data/migrations'
    // },
    // seeds: {
    //   directory: './data/seeds'
    // }
  },
};