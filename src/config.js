const config = {
  APP_PORT: process.env.APP_PORT,
  APP_HOST: process.env.APP_HOST,
  DB: {
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
  },
};

module.exports = config;
