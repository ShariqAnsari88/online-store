// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'dpg-cfnpr6la499f28d6ou7g-a.singapore-postgres.render.com'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'simpleone'),
//       user: env('DATABASE_USERNAME', 'simpleone_user'),
//       password: env('DATABASE_PASSWORD', 'GRDScfZCdegMrZxD9RjS86UEmFm9ku9g'),
//       ssl: env.bool('DATABASE_SSL', true),
//     },
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
