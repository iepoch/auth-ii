// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/employees.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/mirgrations"
    }

  },

};
